import { TLocationInResult } from '@types';
import SearchResult from '../searchResult/searchResult';
import clsx from 'clsx';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import './searchResults.vars.css';
import styles from './searchResults.module.css';

type SearchResultProps = {
  results: TLocationInResult[];
  mapId: string;
  apiKey: string;
};

const SearchResults = ({ results, mapId, apiKey }: SearchResultProps) => {
  return (
    <>
      <div className={clsx(styles.searchResults__header)}>
        {results.length} {results.length === 1 ? 'result' : 'results'}
      </div>
      {results && (
        <MFlex direction="row" wrap="wrap" gap="2xl" justify="center">
          {results.map((result) => {
            return (
              <div key={result.id} className={clsx(styles.searchResults__card)}>
                <SearchResult result={result} mapId={mapId} apiKey={apiKey} />
              </div>
            );
          })}
        </MFlex>
      )}
    </>
  );
};

export default SearchResults;
