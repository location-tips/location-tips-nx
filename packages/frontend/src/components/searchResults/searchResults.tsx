'use client';

import { TLocationInResult } from '@types';
import SearchResult from '../searchResult/searchResult';
import clsx from 'clsx';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import './searchResults.vars.css';
import styles from './searchResults.module.css';

type SearchResultProps = {
  results: TLocationInResult[];
};

const SearchResults = ({ results }: SearchResultProps) => {
  return (
    <div className={clsx(styles.searchResults)}>
      <div className={clsx(styles.searchResults__header)}>
        {results.length} {results.length === 1 ? 'result' : 'results'}
      </div>
      {results && (
        <MFlex direction="row" gap="2xl">
          {results.map((result) => {
            return (
              <div key={result.id} className={clsx(styles.searchResults__card)}>
                <SearchResult result={result} />
              </div>
            );
          })}
        </MFlex>
      )}
    </div>
  );
};

export default SearchResults;
