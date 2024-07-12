import admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { ChromaClient, QueryParams, QueryResponse } from 'chromadb';
import { geminiDescribeSearchQuery, geminiTranslateToEnglish } from '@back/utils/gemini';
import { TBoundedLocation, TCoordinate, TLocationEntity, TLocationSearchDescription, TTranslation } from '@types';

@Injectable()
export class LocationsService {
  async describeSearchQuery(query: string): Promise<TLocationSearchDescription> {
    return geminiDescribeSearchQuery(query);
  }

  async translateToEnglish(query: string): Promise<TTranslation> {
    return geminiTranslateToEnglish(query);
  }

  async getLocationsByIds(ids: string[]): Promise<TLocationEntity[]> {
    const mapResult = new Map<string, TLocationEntity>();
    const db = admin.firestore();
    const locations = await db.collection('locations').where(admin.firestore.FieldPath.documentId(), 'in', ids).get();

    ids.forEach(id => mapResult.set(id, null));

    locations.docs.forEach((doc) => {
      const res = doc.data() as TLocationEntity;

      mapResult.set(doc.id, res);
    });

    return Array.from(mapResult.values()) as TLocationEntity[];
  }

  async searchLocation(text: string, queryDescription: TLocationSearchDescription): Promise<QueryResponse> {
    const client = new ChromaClient();

    const collection = await client.getOrCreateCollection({
        name: "locations",
    });

    const query: QueryParams = {
      queryTexts: [text], // Chroma will embed this for you
      nResults: 20, // how many results to return
    };

    let bounds: TBoundedLocation["boundingBox"];

    // If user requested a specific location
    if (queryDescription.in?.[0]) {
      const { 
        coordinates,
        boundingBox,
      } = queryDescription.in[0];

      bounds = boundingBox;

      if (!bounds) {
        bounds = getSearchBound(coordinates, 50);
      }
    }

    // If user requested a location near a specific location
    if (queryDescription.near[0]) {
      const distance = Number(queryDescription.distance);

      const { 
        coordinates,
      } = queryDescription.near[0];

      bounds = getSearchBound(coordinates, queryDescription.distance && !Number.isNaN(distance) ? distance : 50);
    }

    if (bounds) {
      query.where = {
        "$and": [
          {
            "latitude": { "$gt": bounds.south }
          }, 
          {
            "latitude": { "$lt": bounds.north }
          },
          {
            "longitude": { "$gt": bounds.west }
          },
          {
            "longitude": { "$lt": bounds.east }
          }
        ]
      };
    }

    const results = await collection.query(query);

    return results;
  }
}

function getSearchBound(point: TCoordinate, radius: number): TBoundedLocation["boundingBox"] {
  // Latitude and longitude offsets
  // Earth's radius in kilometers
  const earthRadius = 6378.1;

  // Convert degrees to radians
  const latInRad = point.latitude * (Math.PI / 180);

  // Latitude and longitude offsets
  const latOffset = radius / earthRadius;
  const lonOffset = radius / (earthRadius * Math.cos(latInRad));

  // Convert offsets to degrees
  const latOffsetDeg = latOffset * (180 / Math.PI);
  const lonOffsetDeg = lonOffset * (180 / Math.PI);

  // Calculate bounding box coordinates
  const boundingBox = {
    north: Number(point.latitude) + latOffsetDeg,
    south: Number(point.latitude) - latOffsetDeg,
    east: Number(point.longitude) + lonOffsetDeg,
    west: Number(point.longitude) - lonOffsetDeg
  };

  return boundingBox;
}
