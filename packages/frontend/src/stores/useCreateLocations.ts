import { TLocationsWithImages } from '@types';
import { create } from 'zustand';

interface CreateLocationsState {
    locations: TLocationsWithImages[];
    addLocation: (location: TLocationsWithImages) => void;
    removeLocation: (location: TLocationsWithImages) => void;
    updateLocation: (location: TLocationsWithImages) => void;
}

const useCreateLocations = create<CreateLocationsState>((set) => ({
    locations: [],
    addLocation: (location) => set((state) => ({ locations: [...state.locations, location] })),
    removeLocation: (location) => set((state) => ({ locations: state.locations.filter((l) => l.id !== location.id) })),
    updateLocation: (location) => set((state) => ({ locations: state.locations.map((l) => (l.id === location.id ? location : l)) })),
}));

export default useCreateLocations;