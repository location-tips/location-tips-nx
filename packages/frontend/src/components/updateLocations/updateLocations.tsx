"use client";

import UpdateLocationForm from "@front/components/updateLocationForm/updateLocationForm";
import useCreateLocations from "@front/stores/useCreateLocations";

import { MGallery } from "@location-tips/location-tips-uikit/atoms/MGallery";
import { APIProvider } from "@vis.gl/react-google-maps";

import styles from "./updateLocations.module.css";
import "./updateLocations.vars.css";

type UpdateLocationsProps = {
    mapId: string;
    apiKey: string;
};

const UpdateLocations = ({ mapId, apiKey }: UpdateLocationsProps) => {
    const createLocaton = useCreateLocations();

    return (
        <APIProvider apiKey={apiKey}>
            <MGallery className={styles.galeryWrapper} slides={createLocaton.locations.map((location) => <UpdateLocationForm location={location} mapId={mapId} />)} />
        </APIProvider>
    );
};

export default UpdateLocations;