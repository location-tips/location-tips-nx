import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import clsx from 'clsx';

import './searchSkeleton.vars.css';
import styles from './searchSkeleton.module.css';

const SearchSkeleton = () => {
  return (
    <div className={clsx(styles.skeleton__container)}>
      <MFlex direction="row" wrap="wrap" gap="2xl" justify="center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={clsx(styles.skeleton, styles.skeleton__card)}
          >
            <div className={clsx(styles.skeleton__slide)}>
              <div className={styles.skeleton__image}></div>
            </div>
            <div className={clsx(styles.skeleton__title)}></div>
            <div className={clsx(styles.skeleton__description)}></div>
          </div>
        ))}
      </MFlex>
    </div>
  );
};

export default SearchSkeleton;
