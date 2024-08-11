import { TBounds, TCoordinate } from '@types';

export function getBoundsZoomLevel(bounds: TBounds, pixelWidth: number): number {
    const GLOBE_WIDTH = 256;
    const west = bounds.west;
    const east = bounds.east;
    let angle = east - west;

    if (angle < 0) {
      angle += 360;
    }

    const zoom = Math.round(Math.log(pixelWidth * 360 / angle / GLOBE_WIDTH) / Math.LN2);

    return zoom;
}

export function getRadiusZoomLevel({ latitude, longitude }: TCoordinate, radius: number, pixelWidth: number): number {
    const earthRadius = 6371; // Earth's radius in kilometers
    const latRadians = latitude * (Math.PI / 180);
    const degLongKm = 110.572833 * Math.cos(latRadians);
    const deltaLat = radius / earthRadius;
    const deltaLong = radius / (degLongKm * pixelWidth);

    const west = longitude - deltaLong;
    const east = longitude + deltaLong;
    const south = latitude - deltaLat;
    const north = latitude + deltaLat;

    const bounds = {
        west,
        east,
        south,
        north
    };

    return getBoundsZoomLevel(bounds, pixelWidth);
}

export function convertCoordinates({ latitude, longitude }: TCoordinate): google.maps.LatLngLiteral {
    return { lat: latitude, lng: longitude };
}
