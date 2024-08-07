'use client';
import React, { useState, useEffect } from 'react';
import { MTheme } from '@location-tips/location-tips-uikit/atoms/MTheme';
import { detectPlatform, type Platform } from '@front/utils/detectPlatform';
import usePlatform from '@front/stores/usePlatform';

const ThemeProvider = () => {
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

    window.addEventListener('resize', checkPlatform);

    return () => {
      window.removeEventListener('resize', checkPlatform);
    };
  }, [platform, setPlatform]);

  return <MTheme theme="light" brand="locationtips" platform={platform} />;
};

export default ThemeProvider;
