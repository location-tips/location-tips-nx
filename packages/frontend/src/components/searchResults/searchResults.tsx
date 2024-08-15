import { ReactNode } from 'react';
import { PostLocationsResponse } from '@types';
import SearchResult from '../searchResult/searchResult';
import clsx from 'clsx';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import './searchResults.vars.css';
import styles from './searchResults.module.css';

type SearchResultProps = {
  header: ReactNode;
  results: ReactNode | Partial<PostLocationsResponse>;
  mapId: string;
  apiKey: string;
};

const SearchResults = ({
  header,
  results,
  mapId,
  apiKey
}: SearchResultProps) => {
  const renderContent = (): ReactNode => {
    if (!results)
      return 'Sorry, your request was rejected by server. Please, try again.';

    if (typeof results === 'object' && 'searchResult' in results) {
      if (results.searchResult && results.searchResult.length > 0) {
        return (
          <MFlex direction="row" wrap="wrap" gap="2xl" justify="start">
            {results.searchResult.map((result) => (
              <div key={result.id} className={clsx(styles.searchResults__card)}>
                <SearchResult result={result} mapId={mapId} apiKey={apiKey} />
              </div>
            ))}
          </MFlex>
        );
      } else if (
        results.queryDescription &&
        results.queryDescription.location.length > 0
      ) {
        return (
          <ul>
            {results.queryDescription.location.map((loc, index) => (
              <li key={index}>{loc.name}</li>
            ))}
          </ul>
        );
      } else if (
        results.queryDescription &&
        results.queryDescription.location.length === 0
      ) {
        return <div>{results.queryDescription.description}</div>;
      }
    } else {
      return <>{results}</>;
    }
  };

  return (
    <>
      <div className={clsx(styles.searchResults__header)}>{header}</div>
      {renderContent()}
    </>
  );
};

export default SearchResults;
