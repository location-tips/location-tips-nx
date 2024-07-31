import admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { FieldValue } from '@google-cloud/firestore';
import {
  geminiDescribeSearchQuery,
  geminiTranslateToEnglish,
} from '@back/utils/gemini';
import {
  TLocationEntity,
  TLocationSearchDescription,
  TLocationsWithScore,
  TTranslation,
} from '@types';
import { getEmbeddings } from '@back/utils/vertex';
import { Geopoint, geohashQueryBounds, distanceBetween } from 'geofire-common';
import { getDistanceBetweenEmbeddings, getRadiusFromBoundingBox } from '@back/utils/distance';
import { COLLECTIONS, DB_DEFAULT_LIMIT } from '@const';

@Injectable()
export class LocationsService {
  async describeSearchQuery(
    prompt: string,
    image?: File,
    voice?: File
  ): Promise<TLocationSearchDescription> {
    return geminiDescribeSearchQuery(prompt, image, voice);
  }

  async translateToEnglish(query: string): Promise<TTranslation> {
    return geminiTranslateToEnglish(query);
  }

  async getLocationsByIds(ids: string[]): Promise<TLocationEntity[]> {
    const mapResult = new Map<string, TLocationEntity>();
    const db = admin.firestore();
    const locations = await db
      .collection(COLLECTIONS.LOCATIONS)
      .where(admin.firestore.FieldPath.documentId(), 'in', ids)
      .get();

    ids.forEach((id) => mapResult.set(id, null));

    locations.docs.forEach((doc) => {
      const res = doc.data() as TLocationEntity;

      mapResult.set(doc.id, res);
    });

    return Array.from(mapResult.values()) as TLocationEntity[];
  }

  async searchLocationsWithinRadius(latitude: number, longitude: number, radiusKm: number) {
    const db = admin.firestore();

    // Calculate the bounds of the query
    const center: Geopoint = [latitude, longitude];
    const radiusInM = radiusKm * 1000;

    const bounds = geohashQueryBounds(center, radiusInM);
    const promises = [];

    for (const b of bounds) {
      const q = db
        .collection(COLLECTIONS.LOCATIONS)
        .orderBy('geohash')
        .startAt(b[0])
        .endAt(b[1]);

      promises.push(q.get());
    }

    const snapshots = await Promise.all(promises);

    const matchingDocs = [];

    for (const snap of snapshots) {
      for (const doc of snap.docs) {
        const location = doc.data();

        const lat = location.location.coordinates.latitude;
        const lng = location.location.coordinates.longitude

        // We have to filter out a few false positives due to GeoHash accuracy, but most will match
        const distanceInKm = distanceBetween([lat, lng], center);
        if (distanceInKm <= radiusKm) {
          matchingDocs.push({ ...doc.data(), id: doc.id });
        }
      }
    }

    return matchingDocs;
  }

  async searchLocations(
    text: string,
    queryDescription
  ): Promise<TLocationsWithScore[]> {
    const embeddings = await getEmbeddings(text);

    const db = admin.firestore();
    let collectionRef = db.collection(COLLECTIONS.LOCATIONS);
    let locationsInRegion = [];

    if (queryDescription.near[0]) {
      // Search locations within the radius
      const distance = Number(queryDescription.distance);

      const {
        coordinates: { latitude, longitude },
      } = queryDescription.near[0];

      locationsInRegion = await this.searchLocationsWithinRadius(
        Number(latitude),
        Number(longitude),
        !Number.isNaN(distance) ? distance : 50
      );
    } else if (queryDescription.in[0]) {
      // Search locations within the bounding box or radius from the center of region
      const {
        coordinates: { latitude, longitude },
        boundingBox,
      } = queryDescription.in[0];

      const radius = boundingBox ? getRadiusFromBoundingBox(boundingBox) : 50;

      locationsInRegion = await this.searchLocationsWithinRadius(
        latitude,
        longitude,
        radius
      );
    }

    let locations: FirebaseFirestore.VectorQuerySnapshot<
      admin.firestore.DocumentData,
      admin.firestore.DocumentData
    >;

    if (locationsInRegion.length) {
      // Search locations by prompt within the bounding box or radius from the center of region
      locations = await collectionRef
        .where('geohash', 'in', locationsInRegion.map((l) => l.geohash))
        .findNearest('embedding_field', FieldValue.vector(embeddings[0]), {
        limit: DB_DEFAULT_LIMIT,
        distanceMeasure: 'COSINE',
      })
      .get();

    } else if (!queryDescription.near?.[0] && !queryDescription.in?.[0]) {
      // Search locations by prompt
      locations = await collectionRef
        .findNearest('embedding_field', FieldValue.vector(embeddings[0]), {
          limit: DB_DEFAULT_LIMIT,
          distanceMeasure: 'COSINE',
        })
        .get();
    } else {
      return [];
    }

    // Calculate the distance between the embeddings
    return locations.docs.map((doc) => {
      const locationEntity = doc.data() as TLocationEntity;

      delete locationEntity.image;

      return { ...locationEntity, score: getDistanceBetweenEmbeddings(embeddings[0], locationEntity.embedding_field.toArray()) };
    });
  }
}
