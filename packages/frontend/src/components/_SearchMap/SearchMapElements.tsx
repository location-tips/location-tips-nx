import React, { useContext, useEffect, useMemo } from 'react';
import { GoogleMapsContext } from '@vis.gl/react-google-maps';
import { useGeolocation } from '@uidotdev/usehooks';

import { getRadiusZoomLevel } from '@front/utils/mapUtils';
import { Circle } from '@front/components/_Circle/Circle';
import { LocationMarker } from '@front/components/_LocationMarker';

import type { TLocationSearchDescription, TLocationsWithScore } from '@types';

type SearchMapElementsProps = {
  queryDescription?: TLocationSearchDescription;
  searchResult: TLocationsWithScore[];
};

const SearchMapElements = ({
  queryDescription,
  searchResult,
}: SearchMapElementsProps) => {
  const map = useContext(GoogleMapsContext)?.map;

  const userLocation = useGeolocation();

  const radius = useMemo(() => {
    return (
      (queryDescription?.distance ? parseInt(queryDescription.distance) : 0) *
      1000
    );
  }, [queryDescription]);

  useEffect(() => {
    const c = {
      lat:
        queryDescription?.near?.[0]?.coordinates.latitude ??
        userLocation?.latitude ??
        0,
      lng:
        queryDescription?.near?.[0]?.coordinates.longitude ??
        userLocation?.longitude ??
        0,
    };
    map?.setCenter(c);
  }, [map, queryDescription, userLocation]);

  useEffect(() => {
    const c = map?.getCenter() ?? { lat: () => 0, lng: () => 0 };

    map?.setZoom(
      radius
        ? getRadiusZoomLevel(
            { latitude: c.lat(), longitude: c.lng() },
            radius,
            256,
          )
        : 8,
    );
  }, [map, radius]);

  return (
    <>
      {queryDescription?.distance && queryDescription?.near?.[0] && (
        <Circle
          center={{
            lat: queryDescription?.near?.[0]?.coordinates.latitude,
            lng: queryDescription?.near?.[0]?.coordinates.longitude,
          }}
          radius={radius}
        />
      )}
      {searchResult?.map((location) => (
        <LocationMarker key={location.id} location={location} />
      ))}
    </>
  );
};

export default SearchMapElements;
