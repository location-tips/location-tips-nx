import React from "react";
import type { TLocationsWithScore} from "@types";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { PhDotDuotone } from "@front/icons/PhDotDuotone";
import styles from "./locationMarker.module.css";

type LocationMarkerProps = {
    location: TLocationsWithScore;
    onClick?: () => void;
}

const LocationMarker = ({ location, onClick }: LocationMarkerProps) => {
    return <AdvancedMarker position={{ lat: location.location.coordinates.latitude, lng: location.location.coordinates.longitude }} onClick={onClick}>
        <PhDotDuotone width={64} height={64} className={styles.marker} />
  </AdvancedMarker>
}

export default LocationMarker;