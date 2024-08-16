import clsx from 'clsx';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import './searchSkeleton.vars.css';
import styles from './searchSkeleton.module.css';

const SearchSkeleton = () => {
  return (
    <div className={clsx(styles.container)}>
      <MFlex direction="row" wrap="wrap" gap="2xl" justify="center">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={clsx(styles.skeleton, styles.card)}>
            <div className={clsx(styles.slide)}>
              <div className={styles.image}></div>
            </div>
            <div className={clsx(styles.title)}></div>
            <div className={clsx(styles.description)}></div>
          </div>
        ))}
      </MFlex>
    </div>
  );
};

export default SearchSkeleton;
