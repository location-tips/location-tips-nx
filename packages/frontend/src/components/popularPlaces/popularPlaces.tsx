'use client';

import React from 'react';
import clsx from 'clsx';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import './popularPlaces.vars.css';
import styles from './popularPlaces.module.css';
import { TLocationInResult } from '@types';
import SearchResult from '../searchResult/searchResult';

type PopularPlacesProps = {
  results: TLocationInResult[]; // remove ? when api is ready
};

const PopularPlaces = ({ results }: PopularPlacesProps) => {
  return (
    <>
      <div className={styles.popularPlaces__header}>Popular places:</div>
      {results && (
        <MFlex direction="row" gap="2xl" justify="center">
          {results.map((result) => {
            return (
              <div key={result.id} className={clsx(styles.popularPlaces__card)}>
                <SearchResult result={result} />
              </div>
            );
          })}
        </MFlex>
      )}
    </>
  );
};

export default PopularPlaces;
