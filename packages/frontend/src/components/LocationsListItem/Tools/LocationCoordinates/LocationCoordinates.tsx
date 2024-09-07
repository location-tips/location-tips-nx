import { useState, useEffect, useCallback } from 'react';
import { TLocationInResult } from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { MdiMapOutline } from '@front/icons/MdiMapOutline';
import convertCoordinatestoDMS, {
  DMSCoordinates,
} from '@front/utils/convertCoordinates';

import './LocationCoordinates.vars.css';
import styles from './LocationCoordinates.module.css';

type LocationCoordinatesProps = {
  item: TLocationInResult;
};

export const LocationCoordinates = ({ item }: LocationCoordinatesProps) => {
  const [coords, setCoords] = useState<DMSCoordinates>({
    latitude: '',
    longitude: '',
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (item.location.coordinates) {
      const dmsCoords = convertCoordinatestoDMS(item.location.coordinates);
      setCoords(dmsCoords);
    }
  }, [item.location.coordinates]);

  const copyToClipboard = useCallback(() => {
    const { longitude, latitude } = item.location.coordinates;
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
  }, [item.location.coordinates]);

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
