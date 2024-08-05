'use client';

import AuthorizedForm from '@front/components/authorizedForm/authorizedForm';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';
import type { TLocationsWithImages } from '@types';
import { updateLocation } from '@front/actions/updateLocation';
import { useFormState } from 'react-dom';
import { Map } from "@vis.gl/react-google-maps";
import clsx from 'clsx';
import Image from 'next/image';

import styles from './updateLocationForm.module.css';
import './updateLocationForm.vars.css';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import { convertCoordinates } from '@front/utils/mapUtils';

type UpdateLocationFormProps = {
  location: TLocationsWithImages;
  mapId: string;
};

const UpdateLocationForm = ({ location, mapId }: UpdateLocationFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [updateState, formUpdateAction] = useFormState(updateLocation, {});
  const [title, setTitle] = useState(location.title);
  const [userDescription, setUserDescription] = useState(location.userDescription);
  const debouncedTitle = useDebounce(title, 1000);
  const debouncedDescription = useDebounce(userDescription, 1000);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserDescription(e.target.value);
  };

  useEffect(() => {
    formRef.current?.submit();
  }, [debouncedTitle, debouncedDescription]);

  console.log("location", location);

  return (
    <MFlex direction="column" gap="xl">
        <AuthorizedForm action={formUpdateAction} className={styles.form}>
          <input type="hidden" name="id" value={location.id} />

          <div className={styles.gridContainer}>
            <section className={clsx(styles.mapContainer)}>
              <Map
                  defaultZoom={8}
                  defaultCenter={convertCoordinates(location.location.coordinates)}
                  mapId={mapId}
                >
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
                  placeholder='Add title of the location'
                />
                <MTextarea
                  wrapperClassName={clsx(styles.descriptionField)}
                  name="userDescription"
                  defaultValue={location.userDescription}
                  label="Description"
                  onChange={onDescriptionChange}
                  placeholder='Describe the location. And the details you think are important.'
                />
              </MFlex>

              <MFlex direction="row" gap="l" align="start" justify="start">
                {location.images && <div className={styles.imagePreview}>
                  <Image src={location.images.medium} alt={location.image?.title ?? location.title} layout={'fill'} objectFit={'contain'} />
                </div>
                }
              </MFlex>
            </aside>
          </div>
        </AuthorizedForm>
    </MFlex>
  );
};

export default UpdateLocationForm;
