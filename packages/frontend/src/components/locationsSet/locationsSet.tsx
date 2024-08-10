'use client';

import { TLocationInResult } from '@types';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import './locationsSet.vars.css';
import styles from './locationsSet.module.css';

type LocationsSetProps = {
  apiKey: string;
  mapId: string;
  locations: TLocationInResult[];
};

const LocationsSet = ({ apiKey, mapId, locations }: LocationsSetProps) => {
  return (
    <APIProvider apiKey={apiKey}>
      <div className={styles.locationsSet__wrapper}>
        <div className={styles.locationsSet__mapContainer}>
          <Map
            defaultZoom={8}
            defaultCenter={{ lat: 22, lng: 22 }}
            mapId={mapId}
          />
        </div>
        <div className={styles.locationSet__setContainer}>Foo bar baz</div>
      </div>
    </APIProvider>
  );
};

export default LocationsSet;
