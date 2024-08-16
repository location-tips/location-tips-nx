import React, { useEffect, useState, useCallback, FormEvent } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

import { MInput } from '@location-tips/location-tips-uikit/atoms/MInput';
import { MDropdown } from '@location-tips/location-tips-uikit/atoms/MDropdown';
import { MList } from '@location-tips/location-tips-uikit/atoms/MList';

import styles from './mapGeosearchAutocomplete.module.css';

type MapGeosearchAutocompleteProps = {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
};

// This is a custom built autocomplete component using the "Autocomplete Service" for predictions
// and the "Places Service" for place details
export const MapGeosearchAutocomplete = ({
  onPlaceSelect,
}: MapGeosearchAutocompleteProps) => {
  const map = useMap();
  const places = useMapsLibrary('places');

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompleteSessionToken
  const [sessionToken, setSessionToken] =
    useState<google.maps.places.AutocompleteSessionToken>();

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service
  const [autocompleteService, setAutocompleteService] =
    useState<google.maps.places.AutocompleteService | null>(null);

  // https://developers.google.com/maps/documentation/javascript/reference/places-service
  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);

  const [predictionResults, setPredictionResults] = useState<
    Array<google.maps.places.AutocompletePrediction>
  >([]);

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (!places || !map) return;

    setAutocompleteService(new places.AutocompleteService());
    setPlacesService(new places.PlacesService(map));
    setSessionToken(new places.AutocompleteSessionToken());

    return () => setAutocompleteService(null);
  }, [map, places]);

  const fetchPredictions = useCallback(
    async (inputValue: string) => {
      if (!autocompleteService || !inputValue) {
        setPredictionResults([]);
        return;
      }

      const request = { input: inputValue, sessionToken };
      const response = await autocompleteService.getPlacePredictions(request);

      setPredictionResults(response.predictions);
    },
    [autocompleteService, sessionToken],
  );

  const onInputChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement)?.value;

      setInputValue(value);
      fetchPredictions(value);
    },
    [fetchPredictions],
  );

  const handleSuggestionClick = useCallback(
    (placeId: string) => {
      if (!places) return;

      const detailRequestOptions = {
        placeId,
        fields: ['geometry', 'name', 'formatted_address'],
        sessionToken,
      };

      const detailsRequestCallback = (
        placeDetails: google.maps.places.PlaceResult | null,
      ) => {
        onPlaceSelect(placeDetails);
        setPredictionResults([]);
        setInputValue(placeDetails?.formatted_address ?? '');
        setSessionToken(new places.AutocompleteSessionToken());
      };

      placesService?.getDetails(detailRequestOptions, detailsRequestCallback);
    },
    [onPlaceSelect, places, placesService, sessionToken],
  );

  return (
    <div className={styles.dropdownWrapper}>
      <MDropdown
        open={predictionResults.length > 0}
        noPadding
        dropdownContent={
          <MList
            onChoose={({ key }) => handleSuggestionClick(key)}
            options={predictionResults.map(({ place_id, description }) => ({
              key: place_id,
              value: description,
            }))}
          />
        }
        stretch={false}
      >
        <MInput
          value={inputValue}
          onInput={(event: FormEvent<HTMLInputElement>) => onInputChange(event)}
          placeholder="Search for a place"
        />
      </MDropdown>
    </div>
  );
};

export default MapGeosearchAutocomplete;
