import type {
  LocationData,
  LocationSearchDescription,
} from '../../generic/location';

export type TPostLocationsRequest = {
  searchText?: string;
  image?: File;
  voice?: File;
};

export type TPostLocationsResponse = {
  searchResult: LocationData[];
  queryDescription: LocationSearchDescription;
};
