import React from 'react';
import Page from '@front/components/page/page';
import Link from 'next/link';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';
import FavouriteLocations from '@front/components/favouriteLocations/favouriteLocations';
import './page.vars.css';
import styles from './page.module.css';
import AuthorizedSection from '@front/components/authorizedSection/authorizedSection';

export const metadata = {
  title: 'Favourite locations'
};

export default async function Index() {
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
        <Link href="/">
          <MFlex direction="row" gap="xs">
            <MdiChevronLeft width={24} height={24} />
            <MText>Back</MText>
          </MFlex>
        </Link>
        <MHeading className={styles.heading} mode="h1">
          My favorites
        </MHeading>
        {apiKey && mapId && (
          <AuthorizedSection>
            <FavouriteLocations mapId={mapId} apiKey={apiKey} />
          </AuthorizedSection>
        )}
      </MFlex>
    </Page>
  );
}
