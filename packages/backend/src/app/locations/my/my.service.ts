import type { TLocationEntity } from '@types';
import { Injectable } from '@nestjs/common';
import { COLLECTIONS, DB_DEFAULT_LIMIT } from '@const';
import admin from 'firebase-admin';

@Injectable()
export class MyService {
  async getUserLocations(uid, offset = 0): Promise<TLocationEntity[]> {
    const db = admin.firestore();

    const docs = await db
      .collection(COLLECTIONS.LOCATIONS)
      .where('uid', '==', uid)
      .offset(offset)
      .limit(DB_DEFAULT_LIMIT)
      .get();

    const locations = docs.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as TLocationEntity),
    );

    return locations;
  }
}
