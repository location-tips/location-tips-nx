import { TLocationInResult } from '@types';
import { MGallery } from '@location-tips/location-tips-uikit/atoms/MGallery';
import clsx from 'clsx';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MBadge } from '@location-tips/location-tips-uikit/atoms/MBadge';
import { MdiStarOutline } from '@front/icons/MdiStarOutline';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import Bookmark from '../bookmark/bookmark';
import { useEffect, useMemo, useState } from 'react';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';
import { MdiChevronRight } from '@front/icons/MdiChevronRight';
import Link from 'next/link';
import renderLocationSlides from '@front/utils/renderLocationSlides';

import './searchResult.vars.css';
import styles from './searchResult.module.css';

type SearchResultProps = {
  result: TLocationInResult;
};

const SearchResult = ({ result }: SearchResultProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // TODO: fetch bookmark data from api
    setIsBookmarked(true); // replace with fetch
  }, [result.id]);

  const toggleBookmark = async () => {
    // TODO: await fetch ...
    setIsBookmarked((isBookmarked) => !isBookmarked);
  };

  const slides = renderLocationSlides(result);

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
      <Bookmark isBookmarked={isBookmarked} toggleBookmark={toggleBookmark} />
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
