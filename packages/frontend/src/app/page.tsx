import CreateLocationForm from 'packages/frontend/src/components/createLocationForm/createLocationForm';
import styles from './page.module.css';
import SearchLocationForm from 'packages/frontend/src/components/searchLocationForm/searchLocationForm';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

export const metadata = {}

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <MFlex direction="column" gap="xl" align="center" justify="stretch" className={styles.page}>
        <MCard className={styles.fromContainer}>
          <SearchLocationForm />
        </MCard>

        <MCard className={styles.fromContainer}>
          <CreateLocationForm />
        </MCard>
    </MFlex>
  );
}
