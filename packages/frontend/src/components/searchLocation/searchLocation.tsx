'use client';

import { useFormState } from 'react-dom';
import { t } from '@front/utils/translate';
import clsx from 'clsx';
import { APIProvider, InfoWindow, Map } from '@vis.gl/react-google-maps';
import { searchLocation } from '@front/actions/searchLocation';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MTextarea } from '@location-tips/location-tips-uikit/atoms/MTextarea';
import { MHeading } from '@location-tips/location-tips-uikit/atoms/MHeading';
import LocationMarker from '@front/components/locationMarker/locationMarker';
import { MdiMicrophoneOutline} from '@front/icons/mdiMicrophoneOutline';
import { MdiCameraOutline} from '@front/icons/MdiCameraOutline';
import { PostLocationsResponse, TLocationsWithScore } from '@types';
import FormStatus from '@front/components/formStatus/formStatus';
import { Circle } from '@front/components/circle/circle';

import styles from './searchLocation.module.css';
import { useCallback, useRef, useState } from 'react';
import Head from 'next/head';
import { MText } from '@location-tips/location-tips-uikit/atoms/MText';

type SearchState = Partial<PostLocationsResponse>;

const initialState: SearchState = {};

type SearchLocationProps = {
  apiKey: string;
  mapId: string;
};

const SearchLocation = ({ apiKey, mapId }: SearchLocationProps) => {
  const [state, formAction] = useFormState<SearchState, FormData>(searchLocation, initialState);

  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const [infoWindowLocation, setInfoWindowLocation] = useState<TLocationsWithScore | null>(null);
  const [marker, setMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    (location: TLocationsWithScore) => {
      setInfoWindowLocation(location);
      setInfoWindowShown(isShown => !isShown);
    },
    []
  );

  return (
    <div className={styles.gridContainer}>
      <section className={clsx(styles.mapContainer, { [styles.fullwidth]: !state.searchResult })}>
        <APIProvider apiKey={apiKey}>
          <Map defaultZoom={8} defaultCenter={{lat: state.queryDescription?.near?.[0]?.coordinates.latitude ?? 0, lng: state.queryDescription?.near?.[0]?.coordinates.longitude ?? 0}} mapId={mapId}>
            {state.queryDescription?.distance && <Circle center={{lat: state.queryDescription?.near?.[0]?.coordinates.latitude ?? 0, lng: state.queryDescription?.near?.[0]?.coordinates.longitude ?? 0}} radius={parseFloat(state.queryDescription?.distance ?? "0") * 1000} />}
            {state.searchResult?.map((location) => <LocationMarker location={location} onClick={() => handleMarkerClick(location)} />)}
          </Map>
        </APIProvider>
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
                <MFlex align="start" justify="space-between" className={styles.searchFormFooter}>
                  <MFlex direction="row" gap="m" align="center" justify="start">
                    <MButton mode="tertiary" type="button"><MdiCameraOutline width={20} height={20} /></MButton>
                    <MButton mode="tertiary" type="button"><MdiMicrophoneOutline width={20} height={20} /></MButton>
                  </MFlex>
                  <FormStatus />
                  <MButton type="submit" id="commands">
                    Search
                  </MButton>
                </MFlex>
              }
            >
              <MHeading mode='h3' className={styles.searchFormHeader}>{t('Describe what you are looking for')}</MHeading>
              <MTextarea name="searchText" rows={2} placeholder={t("It could be a beach with black sand, a medieval castle, or cliffs.")} containerClassName={styles.textarea} />
            </MCard>
          </form> 
        </MFlex>
      </section>
      <aside className={clsx(styles.resultsContainer, { [styles.open]: !!state.searchResult })}>
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
              {state.queryDescription?.in?.map((location: any) => <div>
                  {location.name} ({location.type})
              </div>)}
              {state.queryDescription?.near?.map((location: any) => <div>
                  {location.name} ({location.type})
                  <p>{location.description}</p>
              </div>)}
          </MFlex>
          <MFlex direction="column" gap="m" align="start" justify="start">
              {state.queryDescription?.location?.map((location: any) => <div>{location.name} ({location.type})</div>)}
          </MFlex>
        </MCard>
      </aside>
    </div>
  );
};

export default SearchLocation;
