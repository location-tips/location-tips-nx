import { useState, useMemo, useCallback } from 'react';
import { TCoordinate } from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { MdiMapOutline } from '@front/icons/MdiMapOutline';
import convertCoordinatestoDMS, {
  DMSCoordinates,
} from '@front/utils/convertCoordinates';

import './LocationCoordinates.vars.css';
import styles from './LocationCoordinates.module.css';

type LocationCoordinatesProps = {
  coordinates: TCoordinate;
};

export const LocationCoordinates = ({
  coordinates,
}: LocationCoordinatesProps) => {
  const [copied, setCopied] = useState(false);

  const coords = useMemo<DMSCoordinates>(() => {
    if (coordinates) {
      return convertCoordinatestoDMS(coordinates);
    }
    return { latitude: '', longitude: '' };
  }, [coordinates]);

  const copyToClipboard = useCallback(() => {
    const { longitude, latitude } = coordinates;
    const coordString = `${latitude} ${longitude}`;

    navigator.clipboard
      .writeText(coordString)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 30000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }, [coordinates]);

  return (
    <MFlex
      wrap="nowrap"
      align="start"
      className={styles.itemCoordinatesContainer}
      onClick={copyToClipboard}
    >
      <MdiMapOutline width={24} height={24} className={styles.mapIcon} />
      <MFlex align="center" gap="xs" className={styles.itemCoordinates}>
        <span className={styles.itemCoord}>{coords.latitude} </span>
        <span className={styles.itemCoord}>{coords.longitude}</span>
        {copied && <span className={styles.copiedAlert}>Copied!</span>}
      </MFlex>
    </MFlex>
  );
};

export default LocationCoordinates;
