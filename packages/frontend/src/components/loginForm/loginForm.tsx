/* eslint-disable @nx/enforce-module-boundaries */
'use client';

import { useEffect, useMemo, useState } from 'react';
import { getAuth, type User } from 'firebase/auth';
import clsx from 'clsx';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MDropdown } from '@location-tips/location-tips-uikit/atoms/MDropdown';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MList } from '@location-tips/location-tips-uikit/atoms/MList';

import GoogleLoginButton from '@front/components/LoginForm/LoginButtons/GoogleLoginButton';
import { ProfileButton } from '@front/components/ProfileButton';
import '@front/utils/configureFirebase';
import { AddLocationButton } from '@front/components/AddLocationButton';

import './LoginForm.vars.css';
import styles from './LoginForm.module.css';

const auth = getAuth();

export const LoginForm = () => {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isAuthenticated = useMemo(() => currentUser !== null, [currentUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onAuthChange);

    return () => {
      unsubscribe();
    };
  }, []);

  const onAuthChange = (user: User | null) => {
    setCurrentUser(user);
  };

  const handleLoginSuccess = (token: string, user: User) => {
    // Handle successful login
    // console.log(token, user);
  };

  const handleLoginFailure = (error: Error) => {
    // Handle failed login
    console.error(error);
  };

  const toggleDropdownOpen = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };

  const menuOptions = [
    {
      key: 'Google',
      value: (
        <GoogleLoginButton
          auth={auth}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        />
      ),
    },
  ];

  return (
    <MFlex direction="row" justify="end" align="center" wrap="nowrap">
      {!isAuthenticated && (
        <div className={styles.dropdownWrapper}>
          <MDropdown
            dropdownContentClassName={clsx(
              styles.menuDropdownContainer,
              styles.top,
            )}
            onClose={() => {
              setDropdownOpen(true);
            }}
            noPadding={true}
            dropdownContent={
              <MList options={menuOptions} showDivider={false} />
            }
            open={dropdownOpen}
            align="right"
            stretch={false}
          >
            <MButton onClick={toggleDropdownOpen}>Sign In</MButton>
          </MDropdown>
        </div>
      )}
      {isAuthenticated && (
        <MFlex gap="3xl">
          <AddLocationButton />
          <ProfileButton />
        </MFlex>
      )}
    </MFlex>
  );
};

export default LoginForm;
