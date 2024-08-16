import clsx from 'clsx';
import Image from 'next/image';

import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MCaption } from '@location-tips/location-tips-uikit/atoms/MCaption';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';

import LocationModalMap from '@front/components/locationModal/locationModalMap/locationModalMap';

import './locationModalContent.vars.css';
import styles from './locationModalContent.module.css';

import type { TLocationInResult } from '@types';

type LocationModalContentProps = {
  location: TLocationInResult;
  mapId: string;
  apiKey: string;
};

const LocationModalContent = ({
  location,
  mapId,
  apiKey,
}: LocationModalContentProps) => {
  return (
    <MFlex
      direction="row"
      gap="l"
      wrap="nowrap"
      justify="stretch"
      align="stretch"
    >
      <section className={styles.locationModalContainerMap}>
        <LocationModalMap location={location} mapId={mapId} apiKey={apiKey} />
      </section>
      <MFlex
        direction="column"
        gap="l"
        justify="start"
        align="start"
        wrap="nowrap"
        className={styles.locationModalContainerInfo}
      >
        <MFlex direction="column" gap="s" justify="start" align="start">
          <MHeading mode="h3">
            {!location.title || location.title === 'Unknown'
              ? location.image?.title
              : location.title}
          </MHeading>
          <MCaption>{location.location.type}</MCaption>
        </MFlex>

        <MFlex direction="column" gap="m" justify="start" align="start">
          <MHeading mode="h4">
            <MText>Description</MText>
          </MHeading>
          <MFlex
            direction="row"
            gap="l"
            wrap="nowrap"
            justify="start"
            align="start"
          >
            <Image
              className={styles.image}
              src={location.images?.medium}
              alt={location.image?.title ?? location.title}
              width={178}
              height={178}
            />
            <MText>
              {location.userDescription ||
                location.image?.description ||
                location.description}
            </MText>
          </MFlex>
        </MFlex>

        {location.nearest && location.nearest.length > 0 && (
          <MFlex direction="column" gap="m" justify="start" align="start">
            <MHeading mode="h4">
              <MText>Nearest locations</MText>
            </MHeading>

            {location.nearest?.map((nearest, index) => (
              <MCard
                key={index}
                className={clsx(styles.review)}
                header={<MHeading mode="h5">{nearest.title}</MHeading>}
                shadow={false}
              >
                <MFlex
                  direction="row"
                  gap="m"
                  align="start"
                  justify="start"
                  wrap="nowrap"
                >
                  <Image
                    className={styles.image}
                    key={index}
                    src={nearest.images.medium}
                    alt={nearest.image?.title ?? nearest.title}
                    width={178}
                    height={178}
                  />
                  <MCaption>
                    {nearest.userDescription ||
                      nearest.image?.description ||
                      nearest.description}
                  </MCaption>
                </MFlex>
              </MCard>
            ))}
          </MFlex>
        )}
      </MFlex>
    </MFlex>
  );
};

export default LocationModalContent;
