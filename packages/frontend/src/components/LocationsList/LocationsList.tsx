'use client';

import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { TLocationInResult } from '@types';

import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { convertCoordinates } from '@front/utils/mapUtils';
import { LocationMarker } from '@front/components/LocationMarker';
import { LocationsListItem } from '@front/components/LocationsListItem';

import './LocationsList.vars.css';
import styles from './LocationsList.module.css';

type LocationsListProps = {
  apiKey: string;
  mapId: string;
  locations: TLocationInResult[];
  emptyText?: string;
};

export const LocationsList = ({
  apiKey,
  mapId,
  locations: initialLocationsArray,
  emptyText = 'List is empty',
}: LocationsListProps) => {
  const [locationsArray, setLocationsArray] = useState(initialLocationsArray);

  const handleLocationsArrayUpdate = (updatedLocation: TLocationInResult) => {
    setLocationsArray((prevLocationsArray) =>
      prevLocationsArray.map((location) =>
        location.id === updatedLocation.id ? updatedLocation : location,
      ),
    );
  };

  const handleLocationDelete = (deletedLocation: TLocationInResult) => {
    setLocationsArray((prevLocationsArray) =>
      prevLocationsArray.filter(
        (location) => location.id !== deletedLocation.id,
      ),
    );
  };

  return (
    <APIProvider apiKey={apiKey}>
      {!locationsArray || locationsArray.length === 0 ? (
        <MText as="span" size="4xl">
          {emptyText}
        </MText>
      ) : (
        <div className={styles.wrapper}>
          <section className={styles.mapContainer}>
            <Map
              defaultZoom={2}
              defaultCenter={convertCoordinates(
                locationsArray[0].location.coordinates,
              )}
              mapId={mapId}
            >
              {locationsArray.map((location) => (
                <LocationMarker key={location.id} location={location} />
              ))}
            </Map>
          </section>

          <div className={styles.setContainer}>
            <MFlex direction="column" align="start" justify="stretch" gap="l">
              {locationsArray.map((location) => (
                <LocationsListItem
                  key={location.id}
                  item={location}
                  onUpdate={handleLocationsArrayUpdate}
                  onDelete={handleLocationDelete}
                />
              ))}
            </MFlex>
          </div>
        </div>
      )}
    </APIProvider>
  );
};

export default LocationsList;
