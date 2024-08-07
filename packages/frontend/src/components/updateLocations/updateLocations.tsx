'use client';

import UpdateLocationForm from '@front/components/updateLocationForm/updateLocationForm';
import useCreateLocations from '@front/stores/useCreateLocations';

import { MGallery } from '@location-tips/location-tips-uikit/atoms/MGallery';
import { APIProvider } from '@vis.gl/react-google-maps';

import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';
import { MdiChevronRight } from '@front/icons/MdiChevronRight';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import LocationsBullets from '@front/components/locationsBullets/locationsBullets';

import styles from './updateLocations.module.css';
import './updateLocations.vars.css';

type UpdateLocationsProps = {
  mapId: string;
  apiKey: string;
};

const UpdateLocations = ({ mapId, apiKey }: UpdateLocationsProps) => {
  const createLocaton = useCreateLocations();

  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryPortalRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const comp = document.getElementById('gallery-portal') as HTMLDivElement;

    if (comp) {
      galleryPortalRef.current = comp;
    }
  }, []);

  return (
    <APIProvider apiKey={apiKey}>
      <MGallery
        nextButtonClassName={styles.nextButton}
        nextButton={<MdiChevronRight width={64} height={64} />}
        prevButtonClassName={styles.prevButton}
        prevButton={<MdiChevronLeft width={64} height={64} />}
        className={styles.galeryWrapper}
        slides={createLocaton.locations.map((location) => (
          <UpdateLocationForm location={location} mapId={mapId} />
        ))}
        currentSlide={currentSlide}
        onSlideChange={(index) => setCurrentSlide(index)}
      />

      {galleryPortalRef.current &&
        createPortal(
          <LocationsBullets
            locations={createLocaton.locations}
            currentSlide={currentSlide}
          />,
          galleryPortalRef.current
        )}
    </APIProvider>
  );
};

export default UpdateLocations;
