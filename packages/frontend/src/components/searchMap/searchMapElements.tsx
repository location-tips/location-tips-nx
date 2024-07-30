import { useContext, useEffect, useMemo } from "react";
import { GoogleMapsContext, Map } from "@vis.gl/react-google-maps";
import { getRadiusZoomLevel } from "@front/utils/mapUtils";
import { Circle } from '@front/components/circle/circle';
import { useGeolocation } from '@uidotdev/usehooks';
import LocationMarker from '@front/components/locationMarker/locationMarker';
import type { TLocationSearchDescription, TLocationsWithScore } from '@types';
import React from "react";

type SearchMapElementsProps = {
    queryDescription?: TLocationSearchDescription;
    searchResult: TLocationsWithScore[];
};

const SearchMapElements = ({ queryDescription, searchResult }: SearchMapElementsProps) => {
    const map = useContext(GoogleMapsContext)?.map;

    const userLocation = useGeolocation();

    const radius = useMemo(() => {
        return (
        (queryDescription?.distance
            ? parseInt(queryDescription.distance)
            : 0) * 1000
        );
    }, [queryDescription]);

    useEffect(() => {
        const c = {
            lat:
                queryDescription?.near?.[0]?.coordinates.latitude ??
                userLocation?.latitude ??
                0,
            lng:
                queryDescription?.near?.[0]?.coordinates.longitude ??
                userLocation?.longitude ??
                0,
        };
        console.log("set center", c);
        map?.setCenter(c);

        const c1 = map?.getCenter() ?? { lat: () => 0, lng: () => 0 };
        console.log("get center", c1.lat(), c1.lng());

    }, [queryDescription, userLocation]);

    useEffect(() => {
        const c = map?.getCenter() ?? { lat: () => 0, lng: () => 0 };
        console.log("get center", c.lat(), c.lng());
        map?.setZoom(
            radius
                ? getRadiusZoomLevel({ latitude: c.lat(), longitude: c.lng() }, radius, 256)
                : 8
            );
    }, [radius]);


    return <>
        {queryDescription?.distance && queryDescription?.near?.[0] && (
                <Circle center={{
                        lat: queryDescription?.near?.[0]?.coordinates.latitude,
                        lng: queryDescription?.near?.[0]?.coordinates.longitude
                    }}
                    radius={radius}
                />
            )}
            {searchResult?.map((location) => (
              <LocationMarker key={location.id} location={location} />
            ))}
    </>
}

export default SearchMapElements;