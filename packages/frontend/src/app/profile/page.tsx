import React from 'react';
import Link from 'next/link';

import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';

import Page from '@front/components/page/page';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';

import styles from './page.module.css';

export const metadata = {
  title: 'Profile',
  description: 'Profile page',
};

export default function Index() {
  return (
    <Page className={styles.page}>
      <MFlex
        direction="column"
        justify="start"
        align="start"
        gap="l"
        className={styles.pageContainer}
      >
        <Link href="/">
          <MFlex direction="row" gap="xs">
            <MdiChevronLeft width={24} height={24} />
            <MText>Back</MText>
          </MFlex>
        </Link>
        <MFlex
          direction="row"
          gap="l"
          justify="space-between"
          align="center"
          className={styles.header}
        >
          <MHeading className={styles.heading} mode="h1">
            Profile
          </MHeading>
          <MFlex direction="row" gap="l" justify="end" align="center">
            <div id="form-status-portal"></div>
            <div id="gallery-portal"></div>
          </MFlex>
        </MFlex>
      </MFlex>
    </Page>
  );
}
