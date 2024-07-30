'use client';

import { useFormState } from 'react-dom';
import { t } from '@front/utils/translate';
import clsx from 'clsx';
import { APIProvider } from '@vis.gl/react-google-maps';
import { searchLocation } from '@front/actions/searchLocation';
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

import styles from './searchLocation.module.css';

type SearchState = Partial<PostLocationsResponse>;

const initialState: SearchState = {};

type SearchLocationProps = {
  apiKey: string;
  mapId: string;
};

const SearchLocation = ({ apiKey, mapId }: SearchLocationProps) => {
  const [state, formAction] = useFormState<SearchState, FormData>(
    searchLocation,
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
        <aside
          className={clsx(styles.resultsContainer, {
            [styles.open]: !!state.searchResult,
          })}
        >
          <MCard
            className={styles.sidebarResult}
            shadow={false}
            borderLeftBottomRadius="none"
            borderLeftTopRadius="none"
            borderRightBottomRadius="none"
            borderRightTopRadius="none"
          >
            {state.searchResult?.map((location) => {
              return (
                <div key={location.id}>
                  <h3>
                    {location.title} ({location.location.type}){' '}
                    {Number(location.score).toFixed(2)}
                  </h3>
                  <div>{location.description}</div>
                </div>
              );
            })}

            <MFlex direction="row" gap="m" align="start" justify="start">
              {state.queryDescription?.in?.map((location: any) => (
                <div>
                  {location.name} ({location.type})
                </div>
              ))}
              {state.queryDescription?.near?.map((location: any) => (
                <div>
                  {location.name} ({location.type})<p>{location.description}</p>
                </div>
              ))}
            </MFlex>
            <MFlex direction="column" gap="m" align="start" justify="start">
              {state.queryDescription?.location?.map((location: any) => (
                <div>
                  {location.name} ({location.type})
                </div>
              ))}
            </MFlex>
          </MCard>
        </aside>
      </div>
    </APIProvider>
  );
};

export default SearchLocation;
