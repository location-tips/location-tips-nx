import type { PutProfileRequest, TProfile } from '@types';
import { Injectable } from '@nestjs/common';
import { extractExif } from '@back/utils/exif';
import admin from 'firebase-admin';
import { COLLECTIONS } from '@const';

@Injectable()
export class ProfileService {
  async extractExif(file: Buffer): Promise<ExifReader.ExpandedTags> {
    return extractExif(file);
  }

  async saveProfileToDB(Profile: TProfile): Promise<TProfile> {
    const db = admin.firestore();

    const ref = await db.collection(COLLECTIONS.PROFILES).add(Profile);
    const doc = await ref.get();

    return { ...(doc.data()) } as TProfile;
  }

  async updateProfileInDB({ uid }: PutProfileRequest): Promise<TProfile> {
    const db = admin.firestore();
    // TODO: Access controller to check if user is allowed to update Profile

    const doc = (await db.collection(COLLECTIONS.PROFILES).where(uid, '==', uid).get()).docs[0];
    const data = doc.data() as TProfile;

    await db.collection(COLLECTIONS.PROFILES).doc(doc.id).set({ ...data }, { merge: true });

    const docResult = await db.collection(COLLECTIONS.PROFILES).doc(doc.id).get();

    return docResult.data() as TProfile;
  }

  async removeProfileFromDB(uid: TProfile['uid']): Promise<TProfile> {
    const db = admin.firestore();

    const doc = (await db.collection(COLLECTIONS.PROFILES).where(uid, '==', uid).get()).docs[0];

    await db.collection(COLLECTIONS.PROFILES).doc(doc.id).delete();

    return doc.data() as TProfile;
  }
}
