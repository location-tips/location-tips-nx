import Avatar from '@front/components/avatar/avatar';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import styles from './locationsBullets.module.css';
import { TLocationsWithImages } from '@types';

type LocationsBulletsProps = {
  currentSlide: number;
  locations: TLocationsWithImages[];
};

const LocationsBullets = ({ currentSlide, locations }: LocationsBulletsProps) => {

  return (
    <MFlex direction="row" gap="xs" className={styles.bullets}>
      {locations.map((location, index) => (
        <Avatar
          key={location.id}
          className={
            currentSlide === index ? styles.bulletActive : styles.bullet
          }
          src={location.images.small}
          alt={location.title}
        />
      ))}
    </MFlex>
  );
};

export default LocationsBullets;