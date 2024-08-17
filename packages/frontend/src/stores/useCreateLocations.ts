import { create } from 'zustand';
import { TLocationsWithImages } from '@types';

interface CreateLocationsState {
  locations: TLocationsWithImages[];
  pending: number;
  failed: number;
  addPending: () => void;
  addFailed: () => void;
  addLocation: (location: TLocationsWithImages) => void;
  removeLocation: (location: TLocationsWithImages) => void;
  updateLocation: (location: TLocationsWithImages) => void;
  reset: () => void;
}

const useCreateLocations = create<CreateLocationsState>((set) => ({
  locations: [],
  pending: 0,
  failed: 0,
  addPending: () => set((state) => ({ pending: state.pending + 1 })),
  addFailed: () => set((state) => ({ failed: state.failed + 1 })),
  addLocation: (location) =>
    set((state) => ({ locations: [...state.locations, location] })),
  removeLocation: (location) =>
    set((state) => ({
      locations: state.locations.filter((l) => l.id !== location.id),
    })),
  updateLocation: (location) =>
    set((state) => ({
      locations: state.locations.map((l) =>
        l.id === location.id ? location : l,
      ),
    })),
  reset: () => set({ locations: [], pending: 0, failed: 0 }),
}));

export default useCreateLocations;
