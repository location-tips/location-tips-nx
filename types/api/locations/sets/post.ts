import { TLocationSetEntity } from '@types';

export type TPostLocationsSetsRequest = {
  searchText?: string;
  uid?: string;
  offset?: number;
};

export type TPostLocationsSetsResponse = {
  locationsSets: TLocationSetEntity[];
  count: number;
};
