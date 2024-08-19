'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import clsx from 'clsx';
import { APIProvider } from '@vis.gl/react-google-maps';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';

import { t } from '@front/utils/translate';
import { searchLocation } from '@front/actions/searchLocation';
import { FormStatus } from '@front/components/_FormStatus';
import { SearchMap } from '@front/components/SearchMap';
import { ImageUploadField } from '@front/components/ImageUploadField';
import { VoiceUploadField } from '@front/components/VoiceUploadField';
import { SearchSkeleton } from '@front/components/SearchSkeleton';
import { SearchResults } from '@front/components/SearchResults';
import { SearchButton } from '@front/components/SearchButton';
import useSearchResultsLoading from '@front/stores/useSearchResultsLoading';

import './SearchLocation.vars.css';
import styles from './SearchLocation.module.css';

import type { PostLocationsResponse } from '@types';

type SearchState = Partial<PostLocationsResponse>;

const initialState: SearchState = {};

type SearchLocationProps = {
  apiKey: string;
  mapId: string;
};

export const SearchLocation = ({ apiKey, mapId }: SearchLocationProps) => {
  const { isLoading, setIsLoading } = useSearchResultsLoading();
  const skeletonHeader = 'Loading...';
  const skeletonBody = <SearchSkeleton />;
  const [searchResultsHeader, setSearchResultsHeader] = useState('');
  const [searchText, setSearchText] = useState('');

  const searchTextareaRows = useMemo(
    () => Math.min(6, Math.max(2, searchText.split('\n').length)),
    [searchText],
  );

  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState<SearchState, FormData>(
    async (prevState, formData) => {
      setIsLoading(true);
      // uncomment if you want to test without requests to API
      // const result = await mockupLocations(prevState, formData, 'zero');
      const result = await searchLocation(prevState, formData);
      setIsLoading(false);
      return result;
    },
    initialState,
  );

  const isResultsHidden = useMemo(
    () => !isLoading && !state.searchResult,
    [isLoading, state.searchResult],
  );

  const onSearchTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchText(e.target.value);
  };

  const onSearchTextKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

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
  }, [state.searchResult, state.queryDescription?.location]);

  useEffect(() => {
    if (state.queryDescription) {
      let prompt = '';

      if (state.queryDescription?.image) {
        prompt = state.queryDescription.image;
      }

      if (state.queryDescription?.voice) {
        prompt += (prompt ? '\n' : '') + state.queryDescription.voice;
      }

      setSearchText((prevPrompt) =>
        prevPrompt ? prevPrompt + '\n' + prompt : prompt,
      );
    }
  }, [state.queryDescription]);

  return (
    <div className={styles.gridContainer}>
      <section
        className={clsx(styles.mapContainer, {
          [styles.fullwidth]: isResultsHidden,
        })}
      >
        <APIProvider apiKey={apiKey}>
          <SearchMap
            searchResult={state.searchResult ?? []}
            queryDescription={state.queryDescription}
            mapId={mapId}
          />
        </APIProvider>

        <MFlex
          direction="row"
          align="center"
          justify="center"
          className={styles.searchFormContainerWrapper}
        >
          <form
            action={formAction}
            className={styles.searchFormContainer}
            ref={formRef}
          >
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
                  <MFlex direction="row" gap="m" align="center" justify="start">
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
                rows={searchTextareaRows}
                placeholder={t(
                  'It could be a beach with black sand, a medieval castle, or cliffs.',
                )}
                containerClassName={styles.textarea}
                onChange={onSearchTextChange}
                onKeyDown={onSearchTextKeyDown}
                value={searchText}
              />
            </MCard>
          </form>
        </MFlex>
      </section>
      {isLoading && (
        <section className={clsx(styles.resultsContainer)}>
          <SearchResults
            header={skeletonHeader}
            results={skeletonBody}
            mapId={mapId}
            apiKey={apiKey}
          />
        </section>
      )}
      {!isLoading && state.searchResult && (
        <section className={clsx(styles.resultsContainer)}>
          <SearchResults
            header={searchResultsHeader}
            results={state}
            mapId={mapId}
            apiKey={apiKey}
          />
        </section>
      )}
    </div>
  );
};

export default SearchLocation;
