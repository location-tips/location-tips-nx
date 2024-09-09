import { MouseEvent } from 'react';
import Link from 'next/link';
import {
  TLocationInResult,
  TlocationTools,
  TMyLocationToolsProps,
} from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MExpandableText } from '@location-tips/location-tips-uikit/atoms/MExpandableText';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';

import { ImageWithOverlay } from '@front/components/ImageWithOverlay';
import LocationCoordinates from '@front/components/LocationsListItem/Tools/LocationCoordinates/LocationCoordinates';
import useModal, { MODALS } from '@front/stores/useModal';
import { LocationModalHeader } from '../LocationModal/LocationModalHeader';
import { LocationContent } from '../LocationContent';

import './LocationsListItem.vars.css';
import styles from './LocationsListItem.module.css';

type LocationsListItemProps = {
  item: TLocationInResult;
  mapId: string;
  apiKey: string;
  tools?: TlocationTools<TMyLocationToolsProps>;
};

export const LocationsListItem = ({
  item,
  mapId,
  apiKey,
  tools: Tools,
}: LocationsListItemProps) => {
  const modals = useModal();

  const showLocation = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    modals.registerModal(
      MODALS.VIEW_LOCATION,
      <LocationModalHeader
        location={item}
        closeButtonText="Back to my locations"
        onClose={() => modals.hideModal()}
      />,
      <LocationContent location={item} mapId={mapId} apiKey={apiKey} />,
      null,
    );

    modals.showModal(MODALS.VIEW_LOCATION);
  };

  return (
    <MFlex
      className={styles.itemContainer}
      direction="column"
      gap="s"
      align="start"
      justify="stretch"
    >
      <MFlex
        direction="row"
        wrap="nowrap"
        gap="l"
        justify="stretch"
        className={styles.itemContainerHeader}
      >
        <ImageWithOverlay
          src={item.images.medium}
          original={item.images.original}
          alt={item.title}
          width={90}
          height={90}
          className={styles.itemImage}
          draggable={false}
        />
        <MFlex
          direction="column"
          align="stretch"
          gap="xs"
          className={styles.itemTitle}
        >
          <MFlex
            justify="space-between"
            wrap="nowrap"
            gap="xs"
            className={styles.itemHeadingWrapper}
          >
            <MHeading mode="h2" className={styles.itemHeading}>
              <Link
                href={`/location/${item.id}`}
                title={item.title ? item.title : 'Untitled'}
                className={styles.link}
                onClick={showLocation}
              >
                {item.title ? item.title : 'Untitled'}
              </Link>
            </MHeading>
            {Tools && <Tools className={styles.tools} location={item} />}
          </MFlex>
          <div className={styles.itemType}>
            {item.location.type ? item.location.type : 'Place'}
          </div>
          <LocationCoordinates coordinates={item.location.coordinates} />
        </MFlex>
      </MFlex>
      <MExpandableText
        buttonAlign="start"
        expandButtonContent={
          <span className={styles.descriptionButton}>Show more</span>
        }
        collapseButtonContent={
          <span className={styles.descriptionButton}>Collapse</span>
        }
      >
        {item.userDescription ? item.userDescription : item.description}
      </MExpandableText>
    </MFlex>
  );
};

export default LocationsListItem;
