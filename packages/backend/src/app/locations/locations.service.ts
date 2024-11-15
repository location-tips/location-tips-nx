import { Injectable } from '@nestjs/common';
import { LocationData, TLocationSearchDescription, TTranslation } from '@types';

import {
  geminiDescribeSearchQuery,
  geminiTranslateToEnglish,
} from '@back/utils/gemini';
import { getEmbeddings } from '@back/utils/vertex';
import { getRadiusFromBoundingBox } from '@back/utils/distance';
import { getImages } from '@back/utils/firebase';
import { DBService } from '@back/app/db/db.service';

@Injectable()
export class LocationsService {
  constructor(private readonly dbService: DBService) {}

  async describeSearchQuery(
    prompt: string,
    image?: File,
    voice?: File,
  ): Promise<TLocationSearchDescription> {
    return geminiDescribeSearchQuery(prompt, image, voice);
  }

  async translateToEnglish(query: string): Promise<TTranslation> {
    return geminiTranslateToEnglish(query);
  }

  async getImages(
    url: string,
  ): Promise<{ original: string; small: string; medium: string }> {
    return await getImages(url);
  }

  async searchLocations(
    text: string,
    queryDescription?: TLocationSearchDescription,
  ): Promise<LocationData[]> {
    const embeddings = await getEmbeddings(text);

    if (queryDescription?.near[0]) {
      // Search locations within the radius
      const distance = Number(queryDescription.distance);

      const { coordinates } = queryDescription.near[0];

      return this.dbService.searchLocationsWithinRadius(
        embeddings[0],
        coordinates,
        distance,
      );
    } else if (queryDescription?.in[0]) {
      // Search locations within the bounding box or radius from the center of region
      const { coordinates, boundingBox } = queryDescription.in[0];

      const radius = boundingBox ? getRadiusFromBoundingBox(boundingBox) : 50;

      if (boundingBox) {
        return this.dbService.searchLocationsInBounds(
          embeddings[0],
          boundingBox,
        );
      } else {
        return this.dbService.searchLocationsWithinRadius(
          embeddings[0],
          coordinates,
          radius,
        );
      }
    }
  }
}
