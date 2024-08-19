'use client';
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import { convertCoordinates } from '@front/utils/mapUtils';
import { LocationMarker } from '@front/components/_LocationMarker';

import type { TLocationInResult } from '@types';

type LocationModalHeaderProps = {
  location: TLocationInResult;
  mapId: string;
  apiKey: string;
};

export const LocationMap = ({
  location,
  mapId,
  apiKey,
}: LocationModalHeaderProps) => {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultZoom={8}
        defaultCenter={convertCoordinates(location.location.coordinates)}
        mapId={mapId}
      >
        <LocationMarker key={location.id} location={location} />

        {location.nearest?.map((nearLocation) => (
          <LocationMarker key={nearLocation.id} location={nearLocation} />
        ))}
      </Map>
    </APIProvider>
  );
};

export default LocationMap;
