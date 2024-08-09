import React from 'react';
import type { TLocationInResult } from '@types';

import { convertCoordinates } from '@front/utils/mapUtils';
import { Map } from '@vis.gl/react-google-maps';
import LocationMarker from '@front/components/locationMarker/locationMarker';

type LocationModalHeaderProps = {
  location: TLocationInResult;
  mapId: string;
};

const LocationModalMap = ({ location, mapId }: LocationModalHeaderProps) => {
  return (
    <Map
      defaultZoom={8}
      defaultCenter={convertCoordinates(location.location.coordinates)}
      mapId={mapId}
    >
      <LocationMarker
        key={location.id}
        location={location}
      />

      {location.nearest.map((nearLocation) => <LocationMarker key={nearLocation.id} location={nearLocation} />)}
    </Map>
  );
};

export default LocationModalMap;
