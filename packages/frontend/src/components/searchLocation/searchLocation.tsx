'use client';

import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { t } from '@front/utils/translate';
import clsx from 'clsx';
import { APIProvider } from '@vis.gl/react-google-maps';
import { searchLocation } from '@front/actions/searchLocation';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import type { PostLocationsResponse } from '@types';
import FormStatus from '@front/components/formStatus/formStatus';
import SearchMap from '@front/components/searchMap/searchMap';
import ImageUploadField from '@front/components/imageUploadField/imageUploadField';
import VoiceUploadField from '@front/components/voiceUploadField/voiceUploadField';
import SearchResults from '@front/components/searchResults/searchResults';

import SearchButton from '@front/components/searchButton/searchButton';

import './searchLocation.vars.css';
import styles from './searchLocation.module.css';
import { mockupLocations } from '@front/actions/mockupLocation';
import useSearchResultsLoading from '@front/stores/useSearchResultsLoading';
import SearchSkeleton from '../searchSkeleton/searchSkeleton';

type SearchState = Partial<PostLocationsResponse>;

const initialState: SearchState = {};

type SearchLocationProps = {
  apiKey: string;
  mapId: string;
};

const SearchLocation = ({ apiKey, mapId }: SearchLocationProps) => {
  const { isLoading, setIsLoading } = useSearchResultsLoading();
  const [popularPlaces, setPopularPlaces] = useState<SearchState>();
  const popularPlacesHeader = 'Popular places:';
  const skeletonHeader = 'Loading...';
  const skeletonBody = <SearchSkeleton />;
  const [searchResultsHeader, setSearchResultsHeader] = useState('');

  useEffect(() => {
    setIsLoading(true);
    mockupLocations()
      .then((result) => {
        setPopularPlaces(result);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, [setIsLoading]);

  const [state, formAction] = useFormState<SearchState, FormData>(
    async (prevState, formData) => {
      setIsLoading(true);
      // uncomment if you want to test without requests to API
      // const result = await mockupLocations(prevState, formData, 'zero');
      const result = await searchLocation(prevState, formData);
      setIsLoading(false);
      return result;
    },
    initialState
  );

  useEffect(() => {
    if (state.searchResult && state.searchResult.length > 0) {
      const quantity = state.searchResult.length;
      const closingWord =
        state.searchResult.length === 1 ? 'result' : 'results';
      setSearchResultsHeader(`${quantity} ${closingWord}:`);
    } else if (
      state.searchResult &&
      state.searchResult.length === 0 &&
      state.queryDescription?.location &&
      state.queryDescription?.location.length > 0
    ) {
      setSearchResultsHeader('You may like:');
    } else {
      setSearchResultsHeader('Nothing found.');
    }

    const searchText = document.getElementById(
      'searchText'
    ) as HTMLInputElement;
    if (state.queryDescription) {
      console.log(state.queryDescription?.image);
      console.log(state);
      if (state.queryDescription?.image) {
        searchText.value =
          state.queryDescription?.originalPrompt +
          '\n' +
          '\n' +
          state.queryDescription?.image;
      } else {
        searchText.value = state.queryDescription?.originalPrompt;
      }
    }
  }, [state.searchResult, state.queryDescription?.location]);

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
                    align="center"
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
                    <MFlex align="center" justify="end">
                      <FormStatus />
                      <SearchButton />
                    </MFlex>
                  </MFlex>
                }
              >
                <MHeading mode="h3" className={styles.searchFormHeader}>
                  {t('Describe what you are looking for')}
                </MHeading>
                <MTextarea
                  name="searchText"
                  rows={5}
                  placeholder={t(
                    'It could be a beach with black sand, a medieval castle, or cliffs.'
                  )}
                  containerClassName={styles.textarea}
                  id="searchText"
                />
              </MCard>
            </form>
          </MFlex>
        </section>
        {!isLoading && !state.searchResult && popularPlaces?.searchResult && (
          <section className={styles.resultsContainer}>
            <SearchResults
              header={popularPlacesHeader}
              results={popularPlaces}
            />
          </section> // TODO: fetch from API and pass popular places as prop
        )}
        {isLoading && (
          <section className={clsx(styles.resultsContainer)}>
            <SearchResults header={skeletonHeader} results={skeletonBody} />
          </section>
        )}
        {!isLoading && state.searchResult && (
          <section className={clsx(styles.resultsContainer)}>
            <SearchResults header={searchResultsHeader} results={state} />
          </section>
        )}
      </div>
    </APIProvider>
  );
};

export default SearchLocation;
