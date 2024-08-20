import React from 'react';

import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';

import { Page } from '@front/components/Page';

import styles from './page.module.css';

export const metadata = {};

export default function Index() {
  return (
    <Page className={styles.page}>
      <MHeading mode="h1" className={styles.pageTitle}>
        Mobile Application
      </MHeading>
      <MText>Both iOS & Android apps are in develop now</MText>
    </Page>
  );
}
