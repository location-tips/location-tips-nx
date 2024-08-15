'use client';

import LocationsList from '@front/components/locationsList/locationsList';
import { TLocationInResult } from '@types';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

type FavouriteLocationsProps = {
  apiKey: string;
  mapId: string;
};

const auth = getAuth();

const getLocations = async (): Promise<TLocationInResult[]> => {
  const token = await auth.currentUser?.getIdToken();

  try {
    const response = await fetch(`/api/location/favourites`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    return data.favourites;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const FavouriteLocations = ({ apiKey, mapId }: FavouriteLocationsProps) => {
  const [locations, setLocations] = useState<TLocationInResult[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getLocations();

      console.log('data', data);

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
