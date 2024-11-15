import { TUidIdentifier, TLocationCategory, TImageEntity } from '@types';

export type TLocationEntity = {
  id: number;
  uid: TUidIdentifier;
  title: string;
  type?: TLocationCategory;
  description?: string;
  userDescription?: string;
  keywords?: string;
  image: TImageEntity['id'];
  locationName?: string;
  geohash: string;
  latitude: number;
  longitude: number;
  altitude: number;
  embedding: number[];
};
