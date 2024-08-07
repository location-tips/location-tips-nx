import React from 'react';
import Page from '@front/components/page/page';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import UpdateLocations from '@front/components/updateLocations/updateLocations';

import styles from './page.module.css';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import Link from 'next/link';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';

export const metadata = {};

export default function Index() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapId = process.env.GOOGLE_MAPS_ID;

  return (
    <Page className={styles.page}>
      <MFlex direction="column" justify="start" align="start" gap="l">
        <Link href="/">
          <MFlex direction="row" gap="xs">
            <MdiChevronLeft width={24} height={24} />
            <MText>Back</MText>
          </MFlex>
        </Link>
        <MHeading mode="h1">Update locations</MHeading>
        {apiKey && mapId && <UpdateLocations apiKey={apiKey} mapId={mapId} />}
      </MFlex>
    </Page>
  );
}
