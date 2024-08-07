import { create } from 'zustand';
import type { TPlatform } from '@types';

interface PlatformState {
  platform: TPlatform;
  setPlatform: (newPlatform: TPlatform) => void;
}

const usePlatform = create<PlatformState>((set) => ({
  platform: 'web-desktop',
  setPlatform: (newPlatform) => set({ platform: newPlatform }),
}));

export default usePlatform;
