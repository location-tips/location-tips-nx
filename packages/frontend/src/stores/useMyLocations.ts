import { create } from 'zustand';
import { TLocationInResult } from '@types';

interface MyLocationsState {
  locations: TLocationInResult[] | null;
  setLocations: (fetchedLocations: TLocationInResult[]) => void;
  updateLocations: (
    method: 'update' | 'delete',
    location: TLocationInResult,
  ) => void;
}

const useMyLocations = create<MyLocationsState>((set) => ({
  locations: null,
  setLocations: (fetchedLocations) => set({ locations: fetchedLocations }),
  updateLocations: (method, location) =>
    set((state) => {
      if (state.locations === null || state.locations.length === 0) {
        return state;
      }

      if (method === 'update') {
        return {
          locations: state.locations.map((item) =>
            item.id === location.id ? location : item,
          ),
        };
      }

      if (method === 'delete') {
        return {
          locations: state.locations.filter((item) => item.id !== location.id),
        };
      }

      return state;
    }),
}));

export default useMyLocations;
