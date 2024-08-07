import { create } from 'zustand';
import type { Platform } from '@front/utils/detectPlatform';

interface PlatformState {
  platform: Platform;
  setPlatform: (newPlatform: Platform) => void;
}

const usePlatform = create<PlatformState>((set) => ({
  platform: 'web-desktop',
  setPlatform: (newPlatform) => set({ platform: newPlatform }),
}));

export default usePlatform;
