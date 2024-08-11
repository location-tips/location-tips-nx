import React from 'react';
import Page from '@front/components/page/page';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { MText } from '@location-tips/location-tips-uikit/atoms/MText';
import { MdiChevronLeft } from '@front/icons/MdiChevronLeft';
import LocationsSet from '@front/components/locationsSet/locationsSet';
import { TLocationInResult } from '@types';
import { mockupLocations } from '@front/actions/mockupLocation';
import './page.vars.css';
import styles from './page.module.css';

const DOMAIN = process.env.DOMAIN || 'http://localhost:3001';

export const metadata = {}; // TODO: fill

type LocationsSetState = TLocationInResult[];

const getLocationSet = async () => {
  const data = await mockupLocations();
  return data.searchResult;
};

export default async function Index() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapId = process.env.GOOGLE_MAPS_ID;
  try {
    const locationsSet = (await getLocationSet()) as TLocationInResult[];

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
          {apiKey && mapId && locationsSet && (
            <LocationsSet
              apiKey={apiKey}
              mapId={mapId}
              locations={locationsSet}
              emptyText="Your favorite locations list is empty"
            />
          )}
        </MFlex>
      </Page>
    );
  } catch (error) {
    console.log(error);
    redirect('/404');
  }
}
