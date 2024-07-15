import { Injectable } from '@nestjs/common';
import { extractExif } from '@back/utils/exif';
import { geminiDescribeImage } from '@back/utils/gemini';
import { getStorage } from 'firebase-admin/storage';
import { v4 as uuidv4 } from 'uuid';
import admin from 'firebase-admin';
import sharp from 'sharp';
import { FieldValue } from '@google-cloud/firestore';
import { TGeminiResponseDescribeImage, TLocationEntity } from '@types';

@Injectable()
export class LocationService {
  async extractExif(file: Buffer): Promise<ExifReader.ExpandedTags> {
    return extractExif(file);
  }

  async convertToWebp(file: File): Promise<File> {
    const filename = file.name.split('.').slice(0, -1).join('.');
    const fileBuffer = await file.arrayBuffer();
    const outputFileBuffer = await sharp(fileBuffer)
      .resize(2048, 2048, { fit: 'inside' })
      .toFormat('webp')
      .toBuffer();

    const outputFile = new File([outputFileBuffer], `${filename}.webp`, {
      type: 'image/webp',
    });

    return outputFile;
  }

  async getImageDescription(image: File, exif?: ExifReader.ExpandedTags): Promise<TGeminiResponseDescribeImage> {
    let prompt = "";

    if (exif) {
      const { Latitude, Longitude } = exif?.gps ?? {};

      if (Latitude && Longitude) {
        prompt = `shot has been made at ${Latitude} latitude and ${Longitude} longitude`;
      }
    }
    
    return await geminiDescribeImage(image, prompt)
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

  async saveLocationToDB(location: TLocationEntity): Promise<admin.firestore.DocumentReference<admin.firestore.DocumentData, admin.firestore.DocumentData>> {
    const db = admin.firestore();

    return await db.collection('locations').add(location);
  }

}
