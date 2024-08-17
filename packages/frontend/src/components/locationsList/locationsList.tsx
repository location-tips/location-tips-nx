'use client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { TLocationInResult } from '@types';

import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { LocationMarker } from '@front/components/LocationMarker';
import { convertCoordinates } from '@front/utils/mapUtils';
import { LocationsListItem } from '../LocationsListItem';

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
  locations,
  emptyText = 'List is empty',
}: LocationsListProps) => {
  return (
    <APIProvider apiKey={apiKey}>
      {!locations || locations.length === 0 ? (
        <MText as="span" size="4xl">
          {emptyText}
        </MText>
      ) : (
        <div className={styles.wrapper}>
          <section className={styles.mapContainer}>
            <Map
              defaultZoom={2}
              defaultCenter={convertCoordinates(
                locations[0].location.coordinates,
              )}
              mapId={mapId}
            >
              {locations.map((location) => (
                <LocationMarker key={location.id} location={location} />
              ))}
            </Map>
          </section>

          <div className={styles.setContainer}>
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
