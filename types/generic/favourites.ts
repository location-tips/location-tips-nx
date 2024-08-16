import { TLocationEntity } from './location';

export type TFavouritesEntity = {
  uid: string;
  locationIds: TLocationEntity['id'][];
};

export type TFavourites = {
  uid: string;
  favourites: string[];
};
