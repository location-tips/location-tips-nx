import { UidIdentifier } from '@types';

export type TImageEntity = {
  id: string;
  uid: UidIdentifier;
  original: string;
  small: string;
  medium: string;
  description: string;
  exif?: string;
};
