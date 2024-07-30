import type { TLocationSearchDescription, TLocationsWithScore } from '../../generic/location';

export type PostLocationsRequest = {
    searchText?: string;
    image?: File;
    voice?: File;
}

export type PostLocationsResponse = {
    searchResult: TLocationsWithScore[],
    queryDescription: TLocationSearchDescription,
}