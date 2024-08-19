'use client';

import React from 'react';
import { getAuth } from 'firebase/auth';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MList } from '@location-tips/location-tips-uikit/atoms/MList';

import '@front/utils/configureFirebase';
import { LinkButton } from '@front/components/LinkButton';

const auth = getAuth();

export const UserMenu = () => {
  const signOut = () => {
    auth.signOut();
  };

  const menuOptions = [
    { key: 'Profile', value: <LinkButton href="/profile">Profile</LinkButton> },
    {
      key: 'Favourite locations',
      value: (
        <LinkButton href="/locations/favorite">Favorite locations</LinkButton>
      ),
    },
    {
      key: 'My locations',
      value: <LinkButton href="/locations/my">My locations</LinkButton>,
    },
    {
      key: 'Sign out',
      value: (
        <MButton mode="secondary" stretch onClick={signOut}>
          Sign out
        </MButton>
      ),
    },
  ];

  return <MList options={menuOptions} showDivider={false} />;
};

export default UserMenu;
