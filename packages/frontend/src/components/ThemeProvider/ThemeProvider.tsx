'use client';
import React, { useEffect } from 'react';

import { MTheme } from '@location-tips/location-tips-uikit/atoms/MTheme';

import { detectPlatform } from '@front/utils/detectPlatform';
import usePlatform from '@front/stores/usePlatform';

export const ThemeProvider = () => {
  const { platform, setPlatform } = usePlatform();

  useEffect(() => {
    setPlatform(detectPlatform());
  }, [setPlatform]);

  useEffect(() => {
    const checkPlatform = () => {
      const newPlatform = detectPlatform();
      if (newPlatform !== platform) {
        setPlatform(newPlatform);
      }
    };

    window?.addEventListener('resize', checkPlatform);

    return () => {
      window?.removeEventListener('resize', checkPlatform);
    };
  }, [platform, setPlatform]);

  return <MTheme theme="light" brand="locationtips" platform={platform} />;
};

export default ThemeProvider;
