import * as ExifReader from 'exifreader';

import type { ExpandedTags } from 'exifreader';

export const extractExif = async (file: Buffer): Promise<ExpandedTags> => {
  try {
    const tags = await ExifReader.load(file, { expanded: true });

    // The MakerNote tag can be really large. Remove it to lower memory
    // usage if you're parsing a lot of files and saving the tags.
    if (tags.exif) {
      delete tags.exif['MakerNote'];
    }

    return tags;
  } catch (error) {
    return Promise.reject(error);
  }
};
