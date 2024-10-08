import React from 'react';
import Link from 'next/link';

import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';

import { Page } from '@front/components/Page';
import { UpdateLocations } from '@front/components/UpdateLocations';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';
import { LinkButton } from '@front/components/LinkButton';

import './page.vars.css';
import styles from './page.module.css';

export const metadata = {
  title: 'Update locations',
};

export default function Index() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapId = process.env.GOOGLE_MAPS_ID;

  return (
    <Page className={styles.page}>
      <MFlex
        direction="column"
        justify="start"
        align="start"
        gap="l"
        className={styles.pageContainer}
      >
        <MHeading mode="h1">Update locations</MHeading>
        <MFlex
          direction="row"
          gap="l"
          align="center"
          justify="space-between"
          className={styles.actionButtons}
        >
          <Link href="/">
            <MFlex direction="row" gap="xs">
              <MdiChevronLeft width={24} height={24} />
              <MText>Back</MText>
            </MFlex>
          </Link>

          <LinkButton mode="secondary" href={`/locations/my`}>
            Done
          </LinkButton>
        </MFlex>
        <MFlex
          direction="row"
          gap="l"
          justify="space-between"
          align="center"
          className={styles.header}
        >
          <MHeading className={styles.heading} mode="h1">
            Update locations
          </MHeading>
          <MFlex direction="row" gap="l" justify="end" align="center">
            <div id="form-status-portal"></div>
            <div id="gallery-portal"></div>
          </MFlex>
        </MFlex>
        {apiKey && mapId && <UpdateLocations apiKey={apiKey} mapId={mapId} />}
      </MFlex>
    </Page>
  );
}
