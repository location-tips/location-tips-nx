'use client';

import { TLocationInResult } from '@types';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import LocationsListItem from '../locationsListItem/locationsListItem';

import './locationsList.vars.css';
import styles from './locationsList.module.css';
import LocationMarker from '@front/components/locationMarker/locationMarker';
import { convertCoordinates } from '@front/utils/mapUtils';

type LocationsListProps = {
  apiKey: string;
  mapId: string;
  locations: TLocationInResult[];
  emptyText?: string;
};

const LocationsList = ({
  apiKey,
  mapId,
  locations,
  emptyText = 'List is empty',
}: LocationsListProps) => {
  return (
    <APIProvider apiKey={apiKey}>
      {locations.length === 0 ? (
        <MText as="span" size="4xl">
          {emptyText}
        </MText>
      ) : (
        <div className={styles.locationsList__wrapper}>
          <section className={styles.locationsList__mapContainer}>
            <Map
              defaultZoom={2}
              defaultCenter={convertCoordinates(locations[0].location.coordinates)}
              mapId={mapId}
            >
              {locations.map((location) => (
                <LocationMarker key={location.id} location={location} />
              ))}
            </Map>
          </section>

          <div className={styles.locationsList__setContainer}>
            <MFlex direction="column" align="start" justify="stretch" gap="l">
              {locations.map((location) => (
                <LocationsListItem key={location.id} item={location} />
              ))}
            </MFlex>
          </div>
        </div>
      )}
    </APIProvider>
  );
};

export default LocationsList;
