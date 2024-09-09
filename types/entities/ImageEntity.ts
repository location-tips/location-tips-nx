import { Tags } from 'exifreader';

export type ImageEntity = {
  original: string;
  small: string;
  medium: string;
  description: string;
  exif?: Tags;
};
