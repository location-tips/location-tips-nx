import { ImageEntity } from './ImageEntity';
import { LocationCategory } from '../';

export type LocationEntity = {
  uid: string;
  title: string;
  type?: LocationCategory;
  description?: string;
  userDescription?: string;
  keywords?: string;
  image: ImageEntity;
  locationName?: string;
  geohash: string;
  latitude: number;
  longitude: number;
  altitude: number;
  embedding: number[];
};
