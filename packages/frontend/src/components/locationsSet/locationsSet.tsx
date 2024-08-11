'use client';

import { TLocationInResult } from '@types';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import './locationsSet.vars.css';
import styles from './locationsSet.module.css';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import LocationSetItem from '../locationSetItem/locationSetItem';

type LocationsSetProps = {
  apiKey: string;
  mapId: string;
  locations: TLocationInResult[];
  emptyText?: string;
};

const LocationsSet = ({
  apiKey,
  mapId,
  locations,
  emptyText = 'List is empty',
}: LocationsSetProps) => {
  return (
    <APIProvider apiKey={apiKey}>
      <div className={styles.locationsSet__wrapper}>
        <section className={styles.locationsSet__mapContainer}>
          <Map
            defaultZoom={8}
            defaultCenter={{ lat: 22, lng: 22 }}
            mapId={mapId}
          />
        </section>

        <div className={styles.locationSet__setContainer}>
          {locations.length === 0 ? (
            <MText as="span" size="4xl">
              {emptyText}
            </MText>
          ) : (
            <MFlex direction="column" align="start" justify="stretch" gap="l">
              {locations.map((location) => (
                <LocationSetItem key={location.id} item={location} />
              ))}
            </MFlex>
          )}
        </div>
      </div>
    </APIProvider>
  );
};

export default LocationsSet;
