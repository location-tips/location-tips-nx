import admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { FieldValue } from '@google-cloud/firestore';
import {
  geminiTranslateToEnglish,
} from '@back/utils/gemini';
import {
  TLocationsSet,
  TTranslation,
  PostLocationsSetsRequest,
  PostLocationsSetsResponse,
} from '@types';
import { getEmbeddings } from 'packages/backend/src/utils/vertex';

@Injectable()
export class LocationsSetsService {
  async translateToEnglish(query: string): Promise<TTranslation> {
    return geminiTranslateToEnglish(query);
  }

  async searchLocationsSets({ searchText, uid, offset = 0 }: PostLocationsSetsRequest): Promise<PostLocationsSetsResponse> {
    let result: TLocationsSet[] = [];

    if (searchText && !uid) {
      // Get sets by search text
      const embeddings = await getEmbeddings(searchText);

      const db = admin.firestore();
      let collectionRef = db.collection('locationssets');

      const locations = await collectionRef
        .findNearest('embedding_field', FieldValue.vector(embeddings[0]), {
          limit: 20,
          distanceMeasure: 'COSINE',
        })
        .get();

        result = locations.docs.map((doc) => doc.data() as TLocationsSet);
    } else if (searchText && uid) {
      // Get users sets by search text
      const embeddings = await getEmbeddings(searchText);

      const db = admin.firestore();
      let collectionRef = db.collection('locationssets');

      const locations = await collectionRef
        .where('uid', '==', uid)
        .findNearest('embedding_field', FieldValue.vector(embeddings[0]), {
          limit: 20,
          distanceMeasure: 'COSINE',
        })
        .get();

      result = locations.docs.map((doc) => doc.data() as TLocationsSet);

    } else if (!searchText && uid) {
      // Get users sets
      const db = admin.firestore();
      let collectionRef = db.collection('locationssets');

      const locations = await collectionRef
        .where('uid', '==', uid)
        .limit(20)
        .offset(offset)
        .get();

      result = locations.docs.map((doc) => doc.data() as TLocationsSet);

    } else {
      // Get all sets
      const db = admin.firestore();
      let collectionRef = db.collection('locationssets');

      const locations = await collectionRef
        .limit(20)
        .offset(offset)
        .get();

        result = locations.docs.map((doc) => doc.data() as TLocationsSet);
    }

    return {
      locationsSets: result,
      count: result.length,
    };
  }
}
