'use client';

import LocationsList from '@front/components/locationsList/locationsList';
import { MdiLoadingLoop } from '@front/icons/MdiLoadingLoop';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { TLocationInResult } from '@types';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

type MyLocationsProps = {
  apiKey: string;
  mapId: string;
};

const auth = getAuth();

const getLocations = async (): Promise<TLocationInResult[]> => {
  const token = await auth.currentUser?.getIdToken();

  try {
    const response = await fetch(`/api/location/my`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    return data.my;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const MyLocations = ({ apiKey, mapId }: MyLocationsProps) => {
  const [locations, setLocations] = useState<TLocationInResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const data = await getLocations();

        setLocations(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <MFlex justify="center">
          <MdiLoadingLoop width={48} height={48} />
        </MFlex>
      ) : (
        <LocationsList
          apiKey={apiKey}
          mapId={mapId}
          locations={locations}
          emptyText="You haven't added any locations yet"
        />
      )}
    </>
  );
};

export default MyLocations;
