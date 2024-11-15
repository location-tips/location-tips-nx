import { Injectable } from '@nestjs/common';
import { getStorage } from 'firebase-admin/storage';
import { v4 as uuidv4 } from 'uuid';
import convert from 'heic-convert';
import sharp from 'sharp';
import { InjectKnex, Knex } from 'nestjs-knex';
import { type TGeminiResponseDescribeImage } from '@types';

import { geminiDescribeImage } from '@back/utils/gemini';
import { extractExif } from '@back/utils/exif';
import { getImages } from '@back/utils/firebase';

@Injectable()
export class LocationService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

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
}
