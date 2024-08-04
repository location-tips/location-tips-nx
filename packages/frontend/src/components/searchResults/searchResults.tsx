'use client';

import { TLocationInResult } from '@types';
import SearchResult from '../searchResult/searchResult';
import styles from './searchResults.module.css';
import clsx from 'clsx';

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
        <div className={clsx(styles.searchResults__cardsContainer)}>
          {results.map((result) => {
            return (
              <SearchResult
                key={result.uid}
                className={clsx(styles.searchResults_card)}
                result={result}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
