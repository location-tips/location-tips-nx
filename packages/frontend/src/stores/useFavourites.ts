import { create } from 'zustand';
import type { TFavourites } from '@types';

interface FavouritesState {
  favourites: TFavourites["favourites"];
  setFavourites: (favourites: TFavourites["favourites"]) => void;
}

const useFavourites = create<FavouritesState>((set) => ({
  favourites: [],
  setFavourites: (newFavourites) => set({ favourites: newFavourites ?? [] }),
}));

export default useFavourites;
