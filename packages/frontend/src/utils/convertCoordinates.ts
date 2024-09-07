type LocationCoordinates = {
  latitude: number;
  longitude: number;
};

export type DMS = {
  degrees: number;
  minutes: number;
  seconds: number;
  direction: string;
};

export type DMSCoordinates = {
  latitude: string;
  longitude: string;
};

function convertDecimalToDMS(coordinate: number): DMS {
  const absolute: number = Math.abs(coordinate);
  const degrees: number = Math.floor(absolute);
  const minutesNotTruncated: number = (absolute - degrees) * 60;
  const minutes: number = Math.floor(minutesNotTruncated);
  const seconds: number =
    Math.round((minutesNotTruncated - minutes) * 60 * 100) / 100;

  return {
    degrees: degrees,
    minutes: minutes,
    seconds: seconds,
    direction: coordinate >= 0 ? 'N' : 'S',
  };
}

export default function convertCoordinatestoDMS({
  latitude,
  longitude,
}: LocationCoordinates): DMSCoordinates {
  const lat: DMS = convertDecimalToDMS(latitude);
  const lon: DMS = convertDecimalToDMS(longitude);

  lat.direction = latitude >= 0 ? 'N' : 'S';
  lon.direction = longitude >= 0 ? 'E' : 'W';

  return {
    latitude: `${lat.degrees}°${lat.minutes}'${lat.seconds}"${lat.direction}`,
    longitude: `${lon.degrees}°${lon.minutes}'${lon.seconds}"${lon.direction}`,
  };
}
