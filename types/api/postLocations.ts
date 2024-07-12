import type { TLocationSearchDescription, TLocationsWithScore } from '../generic/location';

export type PostLocationsRequest = {
    searchText: string;
}

export type PostLocationsResponse = {
    searchResult: TLocationsWithScore,
    queryDescription: TLocationSearchDescription,
}