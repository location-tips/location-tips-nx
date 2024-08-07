import { STORAGE_ORIGINAL_FOLDER, STORAGE_THUMBS_FOLDER, STORAGE_THUMBS_MEDIUM_SUFFIX, STORAGE_THUMBS_SMALL_SUFFIX } from '@const';
import admin from 'firebase-admin';

export const getImages = async (url: string): Promise<{ original: string; small: string; medium: string }> => {
    const original = admin.storage().bucket().file(`${STORAGE_ORIGINAL_FOLDER}${url}`);
    const medium = admin.storage().bucket().file(`${STORAGE_THUMBS_FOLDER}/${url.replace('.webp', STORAGE_THUMBS_MEDIUM_SUFFIX + '.webp')}`);
    const small = admin.storage().bucket().file(`${STORAGE_THUMBS_FOLDER}/${url.replace('.webp', STORAGE_THUMBS_SMALL_SUFFIX + '.webp')}`);

    return {
      original: (await original.getSignedUrl({action: 'read', expires: new Date().getTime() + 60 * 60 * 1000}))[0],
      small: (await small.getSignedUrl({action: 'read', expires: new Date().getTime() + 60 * 60 * 1000}))[0],
      medium: (await medium.getSignedUrl({action: 'read', expires: new Date().getTime() + 60 * 60 * 1000}))[0],
    }
}
