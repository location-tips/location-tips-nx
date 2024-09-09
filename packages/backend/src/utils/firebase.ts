import admin from 'firebase-admin';
import {
  STORAGE_ORIGINAL_FOLDER,
  STORAGE_THUMBS_FOLDER,
  STORAGE_THUMBS_MEDIUM_SUFFIX,
  STORAGE_THUMBS_SMALL_SUFFIX,
} from '@const';

export const getImages = async (
  url: string,
): Promise<{ original: string; small: string; medium: string }> => {
  const original = admin
    .storage()
    .bucket()
    .file(`${STORAGE_ORIGINAL_FOLDER}${url}`)
    .publicUrl();
  const medium = admin
    .storage()
    .bucket()
    .file(
      `${STORAGE_THUMBS_FOLDER}/${url.replace(
        '.webp',
        STORAGE_THUMBS_MEDIUM_SUFFIX + '.webp',
      )}`,
    )
    .publicUrl();
  const small = admin
    .storage()
    .bucket()
    .file(
      `${STORAGE_THUMBS_FOLDER}/${url.replace(
        '.webp',
        STORAGE_THUMBS_SMALL_SUFFIX + '.webp',
      )}`,
    )
    .publicUrl();

  return {
    original,
    small,
    medium,
  };
};
