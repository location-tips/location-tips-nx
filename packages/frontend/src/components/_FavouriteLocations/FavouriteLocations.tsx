'use client';

import { useEffect, useState } from 'react';
import { TLocationInResult } from '@types';

import { LocationsList } from '@front/components/_LocationsList';
import { fetchFavourites } from '@front/fetch/fetchFavourites';

type FavouriteLocationsProps = {
  apiKey: string;
  mapId: string;
};

export const FavouriteLocations = ({
  apiKey,
  mapId,
}: FavouriteLocationsProps) => {
  const [locations, setLocations] = useState<TLocationInResult[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchFavourites();

      setLocations(data);
    })();
  }, []);

  return (
    <LocationsList
      apiKey={apiKey}
      mapId={mapId}
      locations={locations}
      emptyText="Your favorite locations list is empty"
    />
  );
};

export default FavouriteLocations;
