import CreateLocationForm from '@front/components/createLocationForm/createLocationForm';
import SearchLocationForm from '@front/components/searchLocationForm/searchLocationForm';
import LoginForm from '@front/components/loginForm/loginForm';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import styles from './page.module.css';

export const metadata = {}

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <MFlex direction="column" gap="xl" align="center" justify="stretch" className={styles.page}>
        <LoginForm />

        <MCard className={styles.fromContainer}>
          <SearchLocationForm />
        </MCard>

        <MCard className={styles.fromContainer}>
          <CreateLocationForm />
        </MCard>
    </MFlex>
  );
}
