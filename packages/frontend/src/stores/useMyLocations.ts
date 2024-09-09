import { create } from 'zustand';
import { TLocationInResult } from '@types';

interface MyLocationsState {
  locations: TLocationInResult[] | null;
  setLocations: (fetchedLocations: TLocationInResult[]) => void;
  updateLocation: (location: TLocationInResult) => void;
  deleteLocation: (location: TLocationInResult) => void;
}

const useMyLocations = create<MyLocationsState>((set) => ({
  locations: null,
  setLocations: (fetchedLocations) => set({ locations: fetchedLocations }),
  updateLocation: (location) =>
    set((state) => {
      if (state.locations === null) {
        return state;
      }

      return {
        locations: state.locations.map((item) =>
          item.id === location.id ? location : item,
        ),
      };
    }),

  deleteLocation: (location) =>
    set((state) => ({
      locations: state.locations
        ? state.locations.filter((item) => item.id !== location.id)
        : null,
    })),
}));

export default useMyLocations;
