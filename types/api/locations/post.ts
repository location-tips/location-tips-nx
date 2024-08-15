import type {
  TLocationInResult,
  TLocationSearchDescription,
} from '../../generic/location';

export type PostLocationsRequest = {
  searchText?: string;
  image?: File;
  voice?: File;
};

export type PostLocationsResponse = {
  searchResult: TLocationInResult[];
  queryDescription: TLocationSearchDescription;
};
