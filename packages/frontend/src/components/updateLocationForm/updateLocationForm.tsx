'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import type { TLocationsWithImages } from '@types';
import { createPortal, useFormState } from 'react-dom';
import {
  AdvancedMarker,
  ControlPosition,
  InfoWindow,
  Map,
  MapControl,
  MapEvent,
  GoogleMapsContext,
  useAdvancedMarkerRef,
  useMap,
} from '@vis.gl/react-google-maps';
import clsx from 'clsx';
import Image from 'next/image';

import { useDebounce } from '@uidotdev/usehooks';
import LocationMarker from '@front/components/locationMarker/locationMarker';
import MapGeosearchAutocomplete from '@front/components/mapGeosearchAutocomplete/mapGeosearchAutocomplete';
import FormStatus from '@front/components/formStatus/formStatus';
import AuthorizedForm from '@front/components/authorizedForm/authorizedForm';
import { PhDotDuotone } from '@front/icons/PhDotDuotone';
import { MdiMapMarkerOutline } from '@front/icons/MdiMapMarkerOutline';
import { convertCoordinates } from '@front/utils/mapUtils';
import { updateLocation } from '@front/actions/updateLocation';
import { MCaption } from '@location-tips/location-tips-uikit/atoms/MCaption';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';

import styles from './updateLocationForm.module.css';
import './updateLocationForm.vars.css';
import useCreateLocations from '@front/stores/useCreateLocations';

type UpdateLocationFormProps = {
  location: TLocationsWithImages;
  mapId: string;
};

const UpdateLocationForm = ({ location, mapId }: UpdateLocationFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [updateState, formUpdateAction] = useFormState(updateLocation, {});

  const [centerMarkerInfoOpen, setCenterMarkerInfoOpen] = useState(false);
  const [isSetPointButtonVisible, setIsSetPointButtonVisible] = useState(false);

  const map = useMap();

  const createLocation = useCreateLocations();

  const [markerRef, marker] = useAdvancedMarkerRef();
  const loaderRef = useRef<HTMLElement>();

  const [center, setCenter] = useState({
    lat: location.location.coordinates.latitude,
    lng: location.location.coordinates.longitude,
  });

  const [title, setTitle] = useState(location.title);
  const [userDescription, setUserDescription] = useState(
    location.userDescription
  );
  const [coordinates, setCoordinates] = useState(location.location.coordinates);

  const debouncedTitle = useDebounce(title, 1000);
  const debouncedDescription = useDebounce(userDescription, 1000);
  const debouncedCoordinates = useDebounce(coordinates, 1000);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    createLocation.updateLocation({ ...location, title: e.target.value });
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserDescription(e.target.value);
    createLocation.updateLocation({ ...location, title: e.target.value });
  };

  const onDragEnd = (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng?.lat();
    const lng = event.latLng?.lng();

    if (!lat || !lng) {
      return;
    }

    setCoordinates({ latitude: lat, longitude: lng });
  };

  const onPlaceSelect = (place: google.maps.places.PlaceResult | null) => {
    if (place?.geometry?.location) {
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      map?.setCenter(place.geometry.location);
    }
  };

  const onChangeCoordinatesMarkerClick = () => {
    if (!map) {
      return;
    }

    const center = map.getCenter();

    if (!center) {
      return;
    }

    setCoordinates({ latitude: center.lat(), longitude: center.lng() });

    createLocation.updateLocation({
      ...location,
      location: {
        ...location.location,
        coordinates: { latitude: center.lat(), longitude: center.lng() },
      },
    });

    setIsSetPointButtonVisible(false);
  };

  console.log('coordinates', coordinates, debouncedCoordinates, location, createLocation.locations.find((l) => l.id === location.id));

  const onCentralMarkerClick = () => {
    setCenterMarkerInfoOpen(true);
    setIsSetPointButtonVisible(true);
  };

  const onDragMapEnd = (event: MapEvent) => {
    const center = event.map?.getCenter();

    if (!center) {
      return;
    }

    setCenter({ lat: center.lat(), lng: center.lng() });
    setIsSetPointButtonVisible(true);
  };

  const onMapZoomChanged = (event: MapEvent) => {
    const center = event.map?.getCenter();

    if (!center) {
      return;
    }

    setCenter({ lat: center.lat(), lng: center.lng() });
    setIsSetPointButtonVisible(true);
  };

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, [debouncedTitle, debouncedDescription, debouncedCoordinates]);

  useEffect(() => {
    loaderRef.current = document.getElementById(
      `form-status-portal-${location.id}`
    ) as HTMLElement;
  }, [location.id]);

  return (
    <MFlex direction="column" gap="xl">
      <AuthorizedForm
        action={formUpdateAction}
        className={styles.form}
        ref={formRef}
      >
        <input type="hidden" name="id" value={location.id} />

        <div className={styles.gridContainer}>
          <section className={clsx(styles.mapContainer)}>
            <Map
              defaultZoom={8}
              defaultCenter={convertCoordinates(location.location.coordinates)}
              mapId={mapId}
              onDrag={onDragMapEnd}
              onZoomChanged={onMapZoomChanged}
            >
              <MapControl position={ControlPosition.TOP_CENTER}>
                <MapGeosearchAutocomplete onPlaceSelect={onPlaceSelect} />
              </MapControl>

              {isSetPointButtonVisible && (
                <MapControl position={ControlPosition.BOTTOM_CENTER}>
                  <MButton
                    onClick={onChangeCoordinatesMarkerClick}
                    className={styles.setPointButton}
                  >
                    Set point here
                  </MButton>
                </MapControl>
              )}

              <AdvancedMarker
                ref={markerRef}
                position={center}
                onClick={onCentralMarkerClick}
              >
                <PhDotDuotone
                  width={48}
                  height={48}
                  className={styles.marker}
                />
              </AdvancedMarker>
              {centerMarkerInfoOpen && (
                <InfoWindow
                  headerContent={<MText>My photo made here</MText>}
                  anchor={marker}
                  maxWidth={200}
                  onCloseClick={() => setCenterMarkerInfoOpen(false)}
                >
                  <MButton
                    onClick={onChangeCoordinatesMarkerClick}
                    mode="secondary"
                  >
                    Set coordinates
                  </MButton>
                </InfoWindow>
              )}
              <LocationMarker
                key={location.id}
                location={location}
                draggable={true}
                onDragEnd={onDragEnd}
              />
            </Map>
          </section>
          <aside className={clsx(styles.formContainer)}>
            <MFlex direction="column" gap="xl" align="start" justify="stretch">
              <MInput
                wrapperClassName={clsx(styles.titleField)}
                type="text"
                name="title"
                defaultValue={location.title}
                label="Title"
                onChange={onTitleChange}
                placeholder="Add title of the location"
              />
              <MTextarea
                wrapperClassName={clsx(styles.descriptionField)}
                name="userDescription"
                defaultValue={location.userDescription}
                label="Description"
                onChange={onDescriptionChange}
                placeholder="Describe the location. And the details you think are important."
              />

              <MCaption className={styles.coordinatesCaption}>
                <MdiMapMarkerOutline width={24} height={24} />{' '}
                {debouncedCoordinates.latitude}, {debouncedCoordinates.longitude}
              </MCaption>
              <input
                type="hidden"
                name="coordinates"
                value={JSON.stringify(debouncedCoordinates)}
              />

              <MFlex direction="row" gap="l" align="start" justify="start">
                {location.images && (
                  <div className={styles.imagePreview}>
                    <Image
                      src={location.images.medium}
                      alt={location.image?.title ?? location.title}
                      layout={'fill'}
                      objectFit={'contain'}
                    />
                  </div>
                )}
              </MFlex>

              {loaderRef.current &&
                createPortal(
                  <FormStatus
                    loadingText=""
                    iconWidth={32}
                    iconHeight={32}
                    className={styles.loadingIcon}
                  />,
                  loaderRef.current
                )}
            </MFlex>
          </aside>
        </div>
      </AuthorizedForm>
    </MFlex>
  );
};

export default UpdateLocationForm;
