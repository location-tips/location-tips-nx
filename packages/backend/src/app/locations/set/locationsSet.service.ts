import type { PutLocationsSetRequest, TLocationEntity, TLocationsSet } from '@types';
import { Injectable } from '@nestjs/common';
import admin, { firestore } from 'firebase-admin';
import { getEmbeddings } from '@back/utils/vertex';
import { FieldValue } from '@google-cloud/firestore';

@Injectable()
export class LocationsSetService {
  async saveLocationsSetToDB(locationsSet: TLocationsSet): Promise<TLocationsSet> {
    const db = admin.firestore();

    const ref = await db.collection('locationssets').add(locationsSet);
    const doc = await ref.get();
    const locationsSetResult = { id: doc.id, ...doc.data() as TLocationsSet };

    await this.updateEmbeddingsInLocationsSet(locationsSetResult);

    return ;
  }

  async updateLocationsSetInDB({ id, ...restData }: PutLocationsSetRequest): Promise<TLocationsSet> {
    const db = admin.firestore();
    // TODO: Access controller to check if user is allowed to update LocationsSet

    await db.collection('locationssets').doc(id).set(restData, { merge: true });

    const locationsSet = {id, ...((await db.collection('locationssets').doc(id).get()).data() as TLocationsSet) };

    await this.updateEmbeddingsInLocationsSet(locationsSet);

    return locationsSet;
  }

  async removeLocationsSetFromDB(id: TLocationsSet['id']): Promise<{ id: TLocationsSet['id'] }> {
    // TODO: Access controller to check if user is allowed to remove LocationsSet

    const db = admin.firestore();

    await db.collection('locationssets').doc(id).delete();

    return { id };
  }

  private async updateEmbeddingsInLocationsSet(locationsSet: TLocationsSet): Promise<void> {
    const db = admin.firestore();
    
    const locationIds = locationsSet.locations.map((location) => location.id);
    const locationDescriptions = locationsSet.locations.map((location) => location.authorDescription);
  
    const locationsDocs = await db.collection('locations').where(firestore.FieldPath.documentId(), 'in', locationIds).get();

    const keywords = new Set<string>();

    locationsDocs.forEach((doc) => {
      const locationEntity = doc.data() as TLocationEntity;
      
      keywords.add(locationEntity.title);
      keywords.add(locationEntity.location.name);

      locationEntity.keywords.forEach((keyword) => keywords.add(keyword));
    });

    const textEmbeddings = locationsSet.name + ' ' + locationsSet.description + ' ' + locationDescriptions.join(' ') + ' ' + Array.from(keywords).join(' ');

    const embeddings = await getEmbeddings(textEmbeddings);

    await db.collection('locationssets').doc(locationsSet.id).set({ embedding_field: FieldValue.vector(embeddings[0]) }, { merge: true });

  }
}
