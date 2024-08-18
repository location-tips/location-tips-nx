import React from 'react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { TLocationInResult } from '@types';

import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';

import { Page } from '@front/components/Page';
import { LocationContent } from '@front/components/LocationContent';

import styles from './page.module.css';

type Params = {
  params: {
    id: string;
  };
};

const DOMAIN = process.env.DOMAIN || 'http://localhost:3001';

const locationCache: Map<string, TLocationInResult> = new Map();

const getLocationById = async (id: string): Promise<TLocationInResult> => {
  if (locationCache.has(id)) {
    return locationCache.get(id) as TLocationInResult;
  }

  const response = await fetch(`${DOMAIN}/api/location/${id}`, {
    method: 'GET',
  });

  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();

    locationCache.set(data.id, data);

    return data;
  } else {
    const error = await response.json();
    throw new Error(error);
  }
};

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  const { id } = params;

  const location = await getLocationById(id);

  return {
    title: `Location tips: ${location.title || location.image?.title}`,
    description: location.description,
    keywords: location.keywords,
  };
};

export default async function Index({ params }: Params) {
  const { id } = params;
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapId = process.env.GOOGLE_MAPS_ID;

  try {
    const location = await getLocationById(id);

    return (
      <Page className={styles.page}>
        <MHeading mode="h1" className={styles.pageTitle}>
          {location.title}
        </MHeading>

        {mapId && apiKey && (
          <LocationContent mapId={mapId} location={location} apiKey={apiKey} />
        )}
      </Page>
    );
  } catch (error) {
    redirect('/404');
  }
}
