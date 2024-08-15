import React from 'react';
import Page from '@front/components/page/page';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';

import styles from './page.module.css';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';

export const metadata = {
  title: 'Location sets',
  description:
    'Location sets created by our users to help you plan the best possible trip.',
  keywords: 'location sets, location tips, location tips app'
};

export default function Index() {
  return (
    <Page className={styles.page}>
      <MHeading mode="h1" className={styles.pageTitle}>
        Sets of locations made by our authors
      </MHeading>
      <MText>
        Here will be a list of location sets created by our users to help you
        plan the best possible trip.
      </MText>
    </Page>
  );
}
