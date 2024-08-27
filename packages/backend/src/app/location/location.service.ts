import { Injectable } from '@nestjs/common';
import { getStorage } from 'firebase-admin/storage';
import { v4 as uuidv4 } from 'uuid';
import convert from 'heic-convert';
import admin from 'firebase-admin';
import sharp from 'sharp';
import { COLLECTIONS, DB_DEFAULT_LIMIT } from '@const';

import { geminiDescribeImage } from '@back/utils/gemini';
import { extractExif } from '@back/utils/exif';
import { getImages } from '@back/utils/firebase';

import type {
  PutLocationRequest,
  TGeminiResponseDescribeImage,
  TLocationEntity,
  TLocationsWithImages,
} from '@types';

@Injectable()
export class LocationService {
  async extractExif(file: Buffer): Promise<ExifReader.ExpandedTags> {
    return extractExif(file);
  }

  async convertToWebp(file: File): Promise<File> {
    const filename = file.name.split('.').slice(0, -1).join('.');
    let fileBuffer = await Buffer.from(await file.arrayBuffer());

    if (file.type === 'image/heic') {
      fileBuffer = await convert({
        buffer: fileBuffer,
        format: 'JPEG',
      });
    }

    const outputFileBuffer = await sharp(fileBuffer)
      .resize(2048, 2048, { fit: 'inside' })
      .toFormat('webp')
      .toBuffer();

    const outputFile = new File([outputFileBuffer], `${filename}.webp`, {
      type: 'image/webp',
    });

    return outputFile;
  }

  async getImages(
    url: string,
  ): Promise<{ original: string; small: string; medium: string }> {
    return await getImages(url);
  }

  async getImageDescription(
    image: File,
    exif?: ExifReader.ExpandedTags,
  ): Promise<TGeminiResponseDescribeImage> {
    let prompt = '';

    if (exif) {
      const { Latitude, Longitude } = exif?.gps ?? {};

      if (Latitude && Longitude) {
        prompt = `shot has been made at ${Latitude} latitude and ${Longitude} longitude`;
      }
    }

    return await geminiDescribeImage(image, prompt);
  }

  async uploadToCDN(image: File): Promise<string> {
    const filename = `${uuidv4()}.webp`;

    try {
      const bucket = getStorage().bucket();

      const file = bucket.file(filename);
      const fileBuffer = await image.arrayBuffer();

      await file.save(Buffer.from(fileBuffer), {
        metadata: {
          contentType: image.type,
        },
      });
    } catch (error) {
      console.error('Error uploading file:', error);
    }

    return filename;
  }

  async removeFromCDN(url: string): Promise<void> {
    const bucket = getStorage().bucket();

    const file = bucket.file(url);

    await file.delete();
  }

  async saveLocationToDB(location: TLocationEntity): Promise<TLocationEntity> {
    const db = admin.firestore();

    const ref = await db.collection(COLLECTIONS.LOCATIONS).add(location);
    const doc = await ref.get();

    return { id: doc.id, ...doc.data() } as TLocationEntity;
  }

  async updateLocationInDB({
    id,
    title,
    userDescription,
    location: coordinates,
  }: PutLocationRequest): Promise<TLocationEntity> {
    const db = admin.firestore();
    // TODO: Access controller to check if user is allowed to update location

    const data = (
      await db.collection(COLLECTIONS.LOCATIONS).doc(id).get()
    ).data() as TLocationEntity;

    await db
      .collection(COLLECTIONS.LOCATIONS)
      .doc(id)
      .set(
        {
          ...data,
          title: title ?? data.title,
          userDescription: userDescription ?? data.userDescription,
          location: {
            ...data.location,
            coordinates: coordinates ?? data.location?.coordinates,
          },
        },
        { merge: true },
      );

    const doc = await db.collection(COLLECTIONS.LOCATIONS).doc(id).get();

    const result = doc.data() as TLocationEntity;

    return { ...result, id };
  }

  async removeLocationFromDB(
    id: TLocationEntity['id'],
  ): Promise<TLocationEntity> {
    const db = admin.firestore();

    const doc = await db.collection(COLLECTIONS.LOCATIONS).doc(id).get();

    await db.collection(COLLECTIONS.LOCATIONS).doc(id).delete();

    return doc.data() as TLocationEntity;
  }

  async getLocationById(id: TLocationEntity['id']): Promise<TLocationEntity> {
    const db = admin.firestore();

    const doc = await db.collection(COLLECTIONS.LOCATIONS).doc(id).get();

    return { id: doc.id, ...doc.data() } as TLocationEntity;
  }

  async getNearestLocations(
    geohash: TLocationEntity['geohash'],
  ): Promise<TLocationsWithImages[]> {
    const db = admin.firestore();

    const locations = await db
      .collection(COLLECTIONS.LOCATIONS)
      .where('geohash', '==', geohash)
      .limit(DB_DEFAULT_LIMIT)
      .get();

    const data: TLocationsWithImages[] = await Promise.all(
      locations.docs.map(async (doc) => {
        const loc = {
          ...(doc.data() as TLocationEntity),
          images: await getImages(doc.data().image.url),
        };

        delete loc.embedding_field;
        delete loc.image.exif;

        return loc;
      }),
    );

    return data;
  }
}
