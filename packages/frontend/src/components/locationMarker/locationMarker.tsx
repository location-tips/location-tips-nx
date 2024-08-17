import React from 'react';
import { Marker } from '@vis.gl/react-google-maps';

import type { TLocationEntity } from '@types';
// import { PhDotDuotone } from "@front/icons/PhDotDuotone";
// import styles from "./LocationMarker.module.css";

type LocationMarkerProps = {
  location: Omit<TLocationEntity, 'embedding_field'>;
  draggable?: boolean;
  onClick?: () => void;
  onDragEnd?: (event: google.maps.MapMouseEvent) => void;
};

export const LocationMarker = ({
  location,
  draggable,
  onClick,
  onDragEnd,
}: LocationMarkerProps) => {
  return (
    <Marker
      position={{
        lat: location.location.coordinates.latitude,
        lng: location.location.coordinates.longitude,
      }}
      onClick={onClick}
      draggable={draggable}
      onDragEnd={onDragEnd}
    />
  );
  {
    /* <PhDotDuotone width={64} height={64} className={styles.marker} /> */
  }
};

export default LocationMarker;
