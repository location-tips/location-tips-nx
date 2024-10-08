import Link from 'next/link';
import { TLocationInResult } from '@types';

import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';

import { ImageWithOverlay } from '@front/components/ImageWithOverlay';

import './LocationsListItem.vars.css';
import styles from './LocationsListItem.module.css';

type LocationsListItemProps = {
  item: TLocationInResult;
};

export const LocationsListItem = ({ item }: LocationsListItemProps) => {
  return (
    <MCard
      header={
        <Link
          href={`/location/${item.id}`}
          title={item.title}
          className={styles.link}
        >
          {item.image ? item.image.title : item.title}
        </Link>
      }
    >
      <MFlex direction="row" wrap="nowrap" gap="xl">
        <ImageWithOverlay
          src={item.images.medium}
          original={item.images.original}
          alt={item.title}
          width={200}
          height={200}
          className={styles.itemImage}
          draggable={false}
        />
        <MText className={styles.description}>{item.description}</MText>
      </MFlex>
    </MCard>
  );
};

export default LocationsListItem;
