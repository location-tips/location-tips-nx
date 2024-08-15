import admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { FieldValue } from '@google-cloud/firestore';
import { geminiTranslateToEnglish } from '@back/utils/gemini';
import {
  TLocationsSet,
  TTranslation,
  PostLocationsSetsRequest,
  PostLocationsSetsResponse
} from '@types';
import { getEmbeddings } from 'packages/backend/src/utils/vertex';
import { COLLECTIONS, DB_DEFAULT_LIMIT } from '@const';

@Injectable()
export class LocationsSetsService {
  async translateToEnglish(query: string): Promise<TTranslation> {
    return geminiTranslateToEnglish(query);
  }

  async searchLocationsSets({
    searchText,
    uid,
    offset = 0
  }: PostLocationsSetsRequest): Promise<PostLocationsSetsResponse> {
    let result: TLocationsSet[] = [];

    if (searchText && !uid) {
      // Get sets by search text
      const embeddings = await getEmbeddings(searchText);

      const db = admin.firestore();
      let collectionRef = db.collection(COLLECTIONS.LOCATIONS_SETS);

      const locations = await collectionRef
        .findNearest('embedding_field', FieldValue.vector(embeddings[0]), {
          limit: DB_DEFAULT_LIMIT,
          distanceMeasure: 'COSINE'
        })
        .get();

      result = locations.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as TLocationsSet)
      }));
    } else if (searchText && uid) {
      // Get users sets by search text
      const embeddings = await getEmbeddings(searchText);

      const db = admin.firestore();
      let collectionRef = db.collection(COLLECTIONS.LOCATIONS_SETS);

      const locations = await collectionRef
        .where('uid', '==', uid)
        .findNearest('embedding_field', FieldValue.vector(embeddings[0]), {
          limit: DB_DEFAULT_LIMIT,
          distanceMeasure: 'COSINE'
        })
        .get();

      result = locations.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as TLocationsSet)
      }));
    } else if (!searchText && uid) {
      // Get users sets
      const db = admin.firestore();
      let collectionRef = db.collection(COLLECTIONS.LOCATIONS_SETS);

      const locations = await collectionRef
        .where('uid', '==', uid)
        .limit(DB_DEFAULT_LIMIT)
        .offset(offset)
        .get();

      result = locations.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as TLocationsSet)
      }));
    } else {
      // Get all sets
      const db = admin.firestore();
      let collectionRef = db.collection(COLLECTIONS.LOCATIONS_SETS);

      const locations = await collectionRef
        .limit(DB_DEFAULT_LIMIT)
        .offset(offset)
        .get();

      result = locations.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as TLocationsSet)
      }));
    }

    return {
      locationsSets: result,
      count: result.length
    };
  }
}
