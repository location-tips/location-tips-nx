import { useEffect, useState } from 'react';
import { TLocationInResult } from '@types';
import Bookmark from '../bookmark/bookmark';
import renderLocationSlides from '@front/utils/renderLocationSlides';
import Link from 'next/link';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MGallery } from '@location-tips/location-tips-uikit/atoms/MGallery';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';
import { MdiChevronRight } from '@front/icons/MdiChevronRight';

import './locationSetItem.vars.css';
import styles from './locationSetItem.module.css';
import { title } from 'process';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';

type LocationSetItemProps = {
  item: TLocationInResult;
};

const LocationSetItem = ({ item }: LocationSetItemProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // TODO: fetch bookmark data from api
    setIsBookmarked(true); // replace with fetch
  }, [item.id]);

  const toggleBookmark = async () => {
    // TODO: await fetch ...
    setIsBookmarked((isBookmarked) => !isBookmarked);
  };

  const slides = renderLocationSlides(item);

  const tools = [
    <div key="tools">
      <Bookmark isBookmarked={isBookmarked} toggleBookmark={toggleBookmark} />
    </div>,
  ];

  return (
    <MCard
      key={item.id}
      header={
        <Link
          href={`/locations/${item.id}`}
          title={item.title}
          className={styles.link}
        >
          {item.image ? item.image.title : item.title}
        </Link>
      }
    >
      <MFlex direction="row" wrap="nowrap" gap="xl">
        {/* <div className={styles.galleryContainer}>
                  <MGallery
                    slides={slides}
                    tools={tools}
                    prevButton={<MdiChevronLeft width={20} height={20} />}
                    nextButton={<MdiChevronRight width={20} height={20} />}
                  />
                </div> */}
        <img
          draggable={false}
          src={item.images.medium}
          alt={item.title}
          width={200}
          height={200}
          className={styles.itemImage}
        />
        <MText className={styles.description}>{item.description}</MText>
      </MFlex>
    </MCard>
  );
};

export default LocationSetItem;
