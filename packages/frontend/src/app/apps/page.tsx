import React from 'react';
import Page from '@front/components/page/page';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';

import styles from './page.module.css';

export const metadata = {}

export default function Index() {
  return (
    <Page className={styles.page}>
      <MHeading mode="h1">Mobile Apps</MHeading>
    </Page>
  );
}
