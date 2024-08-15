import { create } from 'zustand';

interface SearchResultsLoadingState {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const useSearchResultsLoading = create<SearchResultsLoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value })
}));

export default useSearchResultsLoading;
