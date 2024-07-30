import React from "react";
import type { TLocationsWithScore} from "@types";
import { Marker } from "@vis.gl/react-google-maps";
import { PhDotDuotone } from "@front/icons/PhDotDuotone";
import styles from "./locationMarker.module.css";

type LocationMarkerProps = {
    location: TLocationsWithScore;
    onClick?: () => void;
}

const LocationMarker = ({ location, onClick }: LocationMarkerProps) => {
    return <Marker position={{ lat: location.location.coordinates.latitude, lng: location.location.coordinates.longitude }} onClick={onClick} />
        {/* <PhDotDuotone width={64} height={64} className={styles.marker} /> */}
}

export default LocationMarker;