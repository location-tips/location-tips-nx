import React from 'react';
import type { TLocationEntity } from '@types';
import { Marker } from '@vis.gl/react-google-maps';
// import { PhDotDuotone } from "@front/icons/PhDotDuotone";
// import styles from "./locationMarker.module.css";

type LocationMarkerProps = {
  location: Omit<TLocationEntity, 'embedding_field'>;
  draggable?: boolean;
  onClick?: () => void;
  onDragEnd?: (event: google.maps.MapMouseEvent) => void;
};

const LocationMarker = ({
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
