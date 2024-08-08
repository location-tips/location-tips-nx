import Avatar from '@front/components/avatar/avatar';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import styles from './locationsBullets.module.css';
import { TLocationsWithImages } from '@types';
import ZStack from '@front/components/zStack/zStack';

type LocationsBulletsProps = {
  currentSlide: number;
  locations: TLocationsWithImages[];
};

const LocationsBullets = ({ currentSlide, locations }: LocationsBulletsProps) => {

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
          />
          <div id={`form-status-portal-${location.id}`}></div>
        </ZStack>
      ))}
    </MFlex>
  );
};

export default LocationsBullets;