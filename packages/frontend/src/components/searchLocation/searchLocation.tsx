'use client';

import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { t } from '@front/utils/translate';
import clsx from 'clsx';
import { APIProvider } from '@vis.gl/react-google-maps';
import { mockupLocations } from '@front/actions/mockupLocation';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import type { PostLocationsResponse } from '@types';
import FormStatus from '@front/components/formStatus/formStatus';
import SearchMap from '@front/components/searchMap/searchMap';
import ImageUploadField from '@front/components/imageUploadField/imageUploadField';
import VoiceUploadField from '@front/components/voiceUploadField/voiceUploadField';
import SearchResults from '@front/components/searchResults/searchResults';

import styles from './searchLocation.module.css';

type SearchState = Partial<PostLocationsResponse>;

const initialState: SearchState = {};

type SearchLocationProps = {
  apiKey: string;
  mapId: string;
};

const SearchLocation = ({ apiKey, mapId }: SearchLocationProps) => {
  const [isLoading, setIsLoading] = useState(false);

  // uncomment for prod:

  // const [state, formAction] = useFormState<SearchState, FormData>(
  //   searchLocation,
  //   initialState

  // );

  // Mockup only
  const [state, formAction] = useFormState<SearchState, FormData>(
    mockupLocations,
    initialState
  );

  return (
    <APIProvider apiKey={apiKey}>
      <div className={styles.gridContainer}>
        <section
          className={clsx(styles.mapContainer, {
            [styles.fullwidth]: !state.searchResult,
          })}
        >
          <SearchMap
            searchResult={state.searchResult ?? []}
            queryDescription={state.queryDescription}
            mapId={mapId}
          />

          <MFlex
            direction="row"
            align="center"
            justify="center"
            className={styles.searchFormContainerWrapper}
          >
            <form action={formAction} className={styles.searchFormContainer}>
              <MCard
                shadow={false}
                borderLeftBottomRadius="2xl"
                borderLeftTopRadius="2xl"
                borderRightBottomRadius="2xl"
                borderRightTopRadius="2xl"
                showFooterDivider={true}
                noPadding={true}
                footer={
                  <MFlex
                    align="start"
                    justify="space-between"
                    className={styles.searchFormFooter}
                  >
                    <MFlex
                      direction="row"
                      gap="m"
                      align="center"
                      justify="start"
                    >
                      <ImageUploadField name="image" />
                      <VoiceUploadField name="voice" />
                    </MFlex>
                    <FormStatus />
                    <MButton type="submit" id="commands">
                      Search
                    </MButton>
                  </MFlex>
                }
              >
                <MHeading mode="h3" className={styles.searchFormHeader}>
                  {t('Describe what you are looking for')}
                </MHeading>
                <MTextarea
                  name="searchText"
                  rows={2}
                  placeholder={t(
                    'It could be a beach with black sand, a medieval castle, or cliffs.'
                  )}
                  containerClassName={styles.textarea}
                />
              </MCard>
            </form>
          </MFlex>
        </section>
        {isLoading && (
          <aside className={clsx(styles.resultsContainer)}>
            Hello
            {/* <SearchResultsSkeleton /> */}
          </aside>
        )}
        {!isLoading && state.searchResult && (
          <aside className={clsx(styles.resultsContainer)}>
            <SearchResults results={state.searchResult} />
          </aside>
        )}
      </div>
    </APIProvider>
  );
};

export default SearchLocation;
