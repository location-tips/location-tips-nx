'use client';

import { Map } from '@vis.gl/react-google-maps';
import React from 'react';

import SearchMapElements from '@front/components/searchMap/searchMapElements';

import type { TLocationSearchDescription, TLocationsWithScore } from '@types';

type SearchMapProps = {
  queryDescription?: TLocationSearchDescription;
  searchResult: TLocationsWithScore[];
  mapId: string;
};

const SearchMap = ({
  queryDescription,
  searchResult,
  mapId,
}: SearchMapProps) => {
  return (
    <Map defaultZoom={8} defaultCenter={{ lat: 22, lng: 22 }} mapId={mapId}>
      <SearchMapElements
        queryDescription={queryDescription}
        searchResult={searchResult}
      />
    </Map>
  );
};

export default SearchMap;
