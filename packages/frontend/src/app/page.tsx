import CreateLocationForm from 'packages/frontend/src/components/createLocationForm/createLocationForm';
import styles from './page.module.css';
import SearchLocationForm from 'packages/frontend/src/components/searchLocationForm/searchLocationForm';

export const metadata = {}

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
        <section className={styles.fromContainer}>
          <SearchLocationForm />
        </section>

        <section className={styles.fromContainer}>
          <CreateLocationForm />
        </section>
    </div>
  );
}
