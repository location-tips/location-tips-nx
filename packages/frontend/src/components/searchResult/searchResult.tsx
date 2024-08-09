import { TLocationInResult } from '@types';
import clsx from 'clsx';
import { MouseEvent, useEffect, useState } from 'react';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MGallery } from '@location-tips/location-tips-uikit/atoms/MGallery';
import { MBadge } from '@location-tips/location-tips-uikit/atoms/MBadge';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import Bookmark from '../bookmark/bookmark';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';
import { MdiStarOutline } from '@front/icons/MdiStarOutline';
import { MdiChevronRight } from '@front/icons/MdiChevronRight';
import Link from 'next/link';

import './searchResult.vars.css';
import styles from './searchResult.module.css';
import useModal, { MODALS } from '@front/stores/useModal';
import LocationModalHeader from '@front/components/locationModal/locationModalHeader/locationModalHeader';
import LocationModalContent from '@front/components/locationModal/locationModalContent/locationModalContent';
import { APIProvider } from '@vis.gl/react-google-maps';

type SearchResultProps = {
  result: TLocationInResult;
  mapId: string;
  apiKey: string;
};

const SearchResult = ({ result, mapId, apiKey }: SearchResultProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const modals = useModal();

  useEffect(() => {
    // TODO: fetch bookmark data from api
    setIsBookmarked(true); // replace with fetch
  }, [result.id]);

  const toggleBookmark = async () => {
    // TODO: await fetch ...
    setIsBookmarked((isBookmarked) => !isBookmarked);
  };

  const showLocation = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    modals.registerModal(
      MODALS.VIEW_LOCATION,
      <LocationModalHeader
        location={result}
        onClose={() => modals.hideModal()}
      />,
      <APIProvider apiKey={apiKey}>
        <LocationModalContent location={result} mapId={mapId} />
      </APIProvider>,
      null
    );

    modals.showModal(MODALS.VIEW_LOCATION);
  };

  const mainPicture = (
    <img draggable={false} src={result.images.medium} alt={result.title} />
  );

  const renderRestPictures = result.nearest.map((nearest, index) => {
    return (
      <img
        draggable={false}
        key={index}
        src={nearest.images.medium}
        alt={nearest.title}
      />
    );
  });

  const slides = [mainPicture, ...renderRestPictures];

  const footer = [
    <MFlex
      direction="column"
      key="footer"
      gap="xs"
      align="start"
      className={clsx(styles.galleryFooter)}
    >
      <MFlex
        direction="row"
        wrap="nowrap"
        justify="space-between"
        className={clsx(styles.galleryFooter__header)}
      >
        <MHeading className={clsx(styles.galleryFooter__title)} mode="h2">
          <Link
            className={clsx(styles.galleryFooter__link)}
            href={`/location/${result.id}`}
            title={result.title}
            onClick={showLocation}
          >
            {result.title}
          </Link>
        </MHeading>
        <MBadge mode="transparent">
          <MdiStarOutline width={16} height={16} /> {result.score.toFixed(1)}
        </MBadge>
      </MFlex>
      <div className={clsx(styles.galleryFooter__type)}>
        {result.location.type}
      </div>
    </MFlex>,
  ];

  const tools = [
    <div key="tools">
      <Bookmark isBookmarked={isBookmarked} toggleBookmark={toggleBookmark} className={styles.bookmark} />
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
