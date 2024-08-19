import { TLocationsWithImages } from '@types';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { Avatar } from '@front/components/_Avatar';
import { ZStack } from '@front/components/_ZStack';

import './LocationsBullets.vars.css';
import styles from './LocationsBullets.module.css';

type LocationsBulletsProps = {
  currentSlide: number;
  locations: TLocationsWithImages[];
  onChoseSlide?: (index: number) => void;
};

export const LocationsBullets = ({
  currentSlide,
  locations,
  onChoseSlide,
}: LocationsBulletsProps) => {
  return (
    <MFlex direction="row" gap="xs">
      {locations.map((location, index) => (
        <ZStack key={location.id}>
          <Avatar
            className={
              currentSlide === index ? styles.bulletActive : styles.bullet
            }
            src={location.images.small}
            alt={location.title}
            onClick={() => index != currentSlide && onChoseSlide?.(index)}
          />
          <div id={`form-status-portal-${location.id}`}></div>
        </ZStack>
      ))}
    </MFlex>
  );
};

export default LocationsBullets;
