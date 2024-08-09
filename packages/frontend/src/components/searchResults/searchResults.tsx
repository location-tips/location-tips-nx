'use client';

import { ReactNode } from 'react';
import { TLocationInResult } from '@types';
import SearchResult from '../searchResult/searchResult';
import clsx from 'clsx';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import './searchResults.vars.css';
import styles from './searchResults.module.css';

type SearchResultProps = {
  header: ReactNode;
  results: ReactNode | TLocationInResult[];
};

const SearchResults = ({ header, results }: SearchResultProps) => {
  return (
    <>
      <div className={clsx(styles.searchResults__header)}>{header}</div>
      {results && (
        <MFlex direction="row" wrap="wrap" gap="2xl" justify="center">
          {Array.isArray(results)
            ? results.map((result) => (
                <div
                  key={result.id}
                  className={clsx(styles.searchResults__card)}
                >
                  <SearchResult result={result} />
                </div>
              ))
            : results}
        </MFlex>
      )}
    </>
  );
};

export default SearchResults;
