import { Injectable } from '@nestjs/common';
import { ChromaClient, QueryParams, QueryResponse } from 'chromadb'
import { geminiDescribeSearchQuery } from 'packages/backend/src/utils/gemini';
import admin from 'firebase-admin';
import { TLocationEntity, TLocationSearchDescription } from '@types';

@Injectable()
export class LocationsService {
  async describeSearchQuery(query: string): Promise<TLocationSearchDescription> {
    return geminiDescribeSearchQuery(query);
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

    return Array.from(mapResult.values());
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

    // if (queryDescription.in?.[0]) {
    //   const { 
    //     coordinates,
    //     boundingBox,
    //   } = queryDescription.in[0];

    //   const delta = kilometersToRadians(50);

    //   if (boundingBox) {
    //     query.where = { latitude: { $gt: boundingBox[0], $lt: boundingBox[2] }, longitude: { $gt: boundingBox[1],  $lt: boundingBox[3] } };
    //     query.where = {
    //       $and: [
    //         {
    //           latitude: { $gt: boundingBox[0] }
    //         }, 
    //         {
    //           latitude: { $lt: boundingBox[2] }
    //         },
    //         {
    //           longitude: { $gt: boundingBox[1] }
    //         },
    //         {
    //           longitude: { $lt: boundingBox[3] }
    //         }
    //       ]
    //     };
    //   } else {
    //     query.where = {
    //       $and: [
    //         {
    //           latitude: { $gt: coordinates.latitude - delta }
    //         }, 
    //         {
    //           latitude: { $lt: coordinates.latitude + delta }
    //         },
    //         {
    //           longitude: { $gt: coordinates.longitude - delta }
    //         },
    //         {
    //           longitude: { $lt: coordinates.longitude + delta }
    //         }
    //       ]
    //     };;
    //   }
    // }

    if (queryDescription.near[0]) {
      const distance = Number(queryDescription.distance);
      let delta = kilometersToRadians(50);

      if (queryDescription.distance && !Number.isNaN(distance)) {
        delta = kilometersToRadians(distance);
      }

      const { 
        coordinates,
      } = queryDescription.near[0];

      query.where = {
        $and: [
          {
            latitude: { $gt: coordinates.latitude - delta }
          }, 
          {
            latitude: { $lt: coordinates.latitude + delta }
          },
          {
            longitude: { $gt: coordinates.longitude - delta }
          },
          {
            longitude: { $lt: coordinates.longitude + delta }
          }
        ]
      };
    }

    console.log('Query:', query);

    const results = await collection.query(query);

    console.log('results:', results);

    return results;
  }
}

function kilometersToRadians(km: number): number {
  return km / 6371;
}