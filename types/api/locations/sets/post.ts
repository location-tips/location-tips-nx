import { TLocationsSet } from '../../../generic/locationSet';

export type PostLocationsSetsRequest = {
  searchText?: string;
  uid?: string;
  offset?: number;
};

export type PostLocationsSetsResponse = {
  locationsSets: TLocationsSet[];
  count: number;
};
