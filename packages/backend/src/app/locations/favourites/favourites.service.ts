import type {
  TFavouritesEntity,
} from '@types';
import { Injectable } from '@nestjs/common';
import { COLLECTIONS } from '@const';
import admin from 'firebase-admin';

@Injectable()
export class FavouritesService {

  async getUserFavourites(uid): Promise<TFavouritesEntity> {
    const db = admin.firestore();

    const docs = await db.collection(COLLECTIONS.FAVOURITES).where('uid', '==', uid).get();

    if (!docs.docs[0]) {
      await db.collection(COLLECTIONS.FAVOURITES).add({ uid, locationIds: [] });

      return { uid, locationIds: [] };
    } else {
      return docs.docs[0].data() as TFavouritesEntity;
    }
  }

  async updateUserFavourites(uid, favourites): Promise<TFavouritesEntity> {
    const db = admin.firestore();

    const docs = await db.collection(COLLECTIONS.FAVOURITES).where('uid', '==', uid).get();

    const doc = docs.docs[0];

    if (!doc) {
      await db.collection(COLLECTIONS.FAVOURITES).add({ uid, locationIds: favourites });

      return { uid, locationIds: favourites };
    } else {
      await db.collection(COLLECTIONS.FAVOURITES).doc(doc.id).set({ uid, locationIds: favourites });

      return docs.docs[0].data() as TFavouritesEntity;
    }
  }
}
