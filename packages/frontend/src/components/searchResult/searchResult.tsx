'use client';

import clsx from 'clsx';
import { MouseEvent } from 'react';
import Link from 'next/link';
import { TLocationInResult } from '@types';

import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MGallery } from '@location-tips/location-tips-uikit/atoms/MGallery';
import { MBadge } from '@location-tips/location-tips-uikit/atoms/MBadge';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';
import { MdiStarOutline } from '@front/icons/MdiStarOutline';
import { MdiChevronRight } from '@front/icons/MdiChevronRight';
import useModal, { MODALS } from '@front/stores/useModal';
import LocationModalHeader from '@front/components/locationModal/locationModalHeader/locationModalHeader';
import LocationModalContent from '@front/components/locationModal/locationModalContent/locationModalContent';
import renderLocationSlides from '@front/utils/renderLocationSlides';
import AuthorizedSection from '@front/components/authorizedSection/authorizedSection';
import Bookmark from '../bookmark/bookmark';

import './searchResult.vars.css';
import styles from './searchResult.module.css';

type SearchResultProps = {
  result: TLocationInResult;
  mapId: string;
  apiKey: string;
};

const SearchResult = ({ result, mapId, apiKey }: SearchResultProps) => {
  const modals = useModal();

  const showLocation = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    modals.registerModal(
      MODALS.VIEW_LOCATION,
      <LocationModalHeader
        location={result}
        onClose={() => modals.hideModal()}
      />,
      <LocationModalContent location={result} mapId={mapId} apiKey={apiKey} />,
      null,
    );

    modals.showModal(MODALS.VIEW_LOCATION);
  };

  const slides = renderLocationSlides(result);

  const footer = [
    <MFlex direction="column" key="footer" gap="xs" align="start">
      <MFlex
        direction="row"
        wrap="nowrap"
        justify="space-between"
        className={clsx(styles.galleryHeader)}
      >
        <MHeading className={clsx(styles.galleryTitle)} mode="h2">
          <Link
            className={clsx(styles.galleryLink)}
            href={`/location/${result.id}`}
            title={result.title}
            onClick={showLocation}
          >
            {result.title || result.location.name || result.image?.title}
          </Link>
        </MHeading>
        <MBadge mode="transparent">
          <MdiStarOutline width={16} height={16} /> {result.score.toFixed(1)}
        </MBadge>
      </MFlex>
      <div className={clsx(styles.galleryType)}>{result.location.type}</div>
    </MFlex>,
  ];

  const tools = [
    <div key="tools">
      <AuthorizedSection>
        {result.id && <Bookmark id={result.id} className={styles.bookmark} />}
      </AuthorizedSection>
    </div>,
  ];

  const prevButton = <MdiChevronLeft width={20} height={20} />;
  const nextButton = <MdiChevronRight width={20} height={20} />;

  return (
    <MGallery
      slides={slides}
      footer={footer}
      tools={tools}
      prevButton={prevButton}
      nextButton={nextButton}
    />
  );
};

export default SearchResult;
