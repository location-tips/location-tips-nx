import Avatar from '@front/components/avatar/avatar';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import styles from './locationsBullets.module.css';
import { TLocationsWithImages } from '@types';
import ZStack from '@front/components/zStack/zStack';

type LocationsBulletsProps = {
  currentSlide: number;
  locations: TLocationsWithImages[];
  onChoseSlide?: (index: number) => void;
};

const LocationsBullets = ({ currentSlide, locations, onChoseSlide }: LocationsBulletsProps) => {

  return (
    <MFlex direction="row" gap="xs" className={styles.bullets}>
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