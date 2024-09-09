'use client';

import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { TLocationInResult } from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { LocationsList } from '@front/components/LocationsList';
import { MyLocationTools } from '@front/components/LocationsListItem/Tools/MyLocationsTools/MyLocationsTools';
import { MdiLoadingLoop } from '@front/icons/MdiLoadingLoop';
import useMyLocations from '@front/stores/useMyLocations';

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
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      // next: {
      //   tags: [
      //     'my_locations',
      //     `locations_user_${auth.currentUser?.uid}`,
      //     `user_${auth.currentUser?.uid}`,
      //   ],
      // },
    });

    const data = await response.json();

    return data.my;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const MyLocations = ({ apiKey, mapId }: MyLocationsProps) => {
  const { locations, setLocations } = useMyLocations();

  useEffect(() => {
    (async () => {
      try {
        const data = await getLocations();
        setLocations(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setLocations]);

  const loading = locations === null;

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
          tools={MyLocationTools}
          emptyText="You haven't added any locations yet"
        />
      )}
    </>
  );
};

export default MyLocations;
