'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal, useFormState } from 'react-dom';
import {
  ControlPosition,
  Map,
  MapControl,
  MapEvent,
  useMap,
} from '@vis.gl/react-google-maps';
import clsx from 'clsx';
import Image from 'next/image';
import { useDebounce } from '@uidotdev/usehooks';

import { MCaption } from '@location-tips/location-tips-uikit/atoms/MCaption';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';

import { updateLocation } from '@front/actions/updateLocation';
import { convertCoordinates } from '@front/utils/mapUtils';
import { MdiMapMarkerOutline } from '@front/icons/MdiMapMarkerOutline';
import { PhDotDuotone } from '@front/icons/PhDotDuotone';
import { AuthorizedForm } from '@front/components/AuthorizedForm';
import { FormStatus } from '@front/components/FormStatus';
import { MapGeosearchAutocomplete } from '@front/components/MapGeosearchAutocomplete';
import { LocationMarker } from '@front/components/LocationMarker';

import './UpdateLocationForm.vars.css';
import styles from './UpdateLocationForm.module.css';

import type { TLocationsWithImages } from '@types';

type UpdateLocationFormProps = {
  location: TLocationsWithImages;
  mapId: string;
};

export const UpdateLocationForm = ({
  location: initialLocation,
  mapId,
}: UpdateLocationFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [updateState, formUpdateAction] = useFormState(updateLocation, {});

  const [isSetPointButtonVisible, setIsSetPointButtonVisible] = useState(false);
  const [location, setLocation] = useState(initialLocation);

  const map = useMap();

  const loaderRef = useRef<HTMLElement>();

  const [title, setTitle] = useState(initialLocation.title);
  const [userDescription, setUserDescription] = useState(
    initialLocation.userDescription,
  );
  const [coordinates, setCoordinates] = useState(
    initialLocation.location.coordinates,
  );

  const debouncedTitle = useDebounce(title, 1000);
  const debouncedDescription = useDebounce(userDescription, 1000);
  const debouncedCoordinates = useDebounce(coordinates, 1000);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserDescription(e.target.value);
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

    setIsSetPointButtonVisible(false);
  };

  const onCentralMarkerClick = () => {
    setIsSetPointButtonVisible(true);
  };

  const onDragMapEnd = (event: MapEvent) => {
    setIsSetPointButtonVisible(true);
  };

  const onMapZoomChanged = (event: MapEvent) => {
    const center = event.map?.getCenter();

    if (!center) {
      return;
    }

    setIsSetPointButtonVisible(true);
  };

  useEffect(() => {
    formRef.current?.requestSubmit();
  }, [debouncedTitle, debouncedDescription, debouncedCoordinates]);

  useEffect(() => {
    // TODO: thats fucking dirty hack cause I using portals
    setTimeout(() => {
      loaderRef.current = document.getElementById(
        `form-status-portal-${location.id}`,
      ) as HTMLElement;
    }, 1000);
  }, [location.id]);

  useEffect(() => {
    updateState?.id &&
      setLocation({
        ...location,
        title: updateState.title,
        userDescription: updateState.userDescription,
        location: {
          ...location.location,
          coordinates: updateState.coordinates,
        },
      });
  }, [location, updateState]);

  return (
    <MFlex direction="column" gap="xl">
      {location && (
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
                defaultCenter={convertCoordinates(
                  location.location.coordinates,
                )}
                mapId={mapId}
                onDragend={onDragMapEnd}
                onZoomChanged={onMapZoomChanged}
              >
                <MapControl position={ControlPosition.TOP_CENTER}>
                  <MapGeosearchAutocomplete onPlaceSelect={onPlaceSelect} />
                </MapControl>

                <MapControl position={ControlPosition.CENTER}>
                  <PhDotDuotone
                    width={48}
                    height={48}
                    className={styles.marker}
                    onClick={onCentralMarkerClick}
                  />
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
                <LocationMarker
                  key={location.id}
                  location={location}
                  draggable={true}
                  onDragEnd={onDragEnd}
                />
              </Map>
            </section>
            <aside className={clsx(styles.formContainer)}>
              <MFlex
                direction="column"
                gap="xl"
                align="start"
                justify="stretch"
              >
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

                <MCaption>
                  <MdiMapMarkerOutline width={24} height={24} />{' '}
                  {debouncedCoordinates.latitude},{' '}
                  {debouncedCoordinates.longitude}
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
                    loaderRef.current,
                  )}
              </MFlex>
            </aside>
          </div>
        </AuthorizedForm>
      )}
    </MFlex>
  );
};

export default UpdateLocationForm;
