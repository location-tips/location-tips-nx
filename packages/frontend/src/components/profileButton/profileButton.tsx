'use client';
import React, { useState } from 'react';

import { getAuth } from 'firebase/auth';

import { MDropdown } from '@location-tips/location-tips-uikit/atoms/MDropdown';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import clsx from 'clsx';

import Avatar from '@front/components/avatar/avatar';
import UserMenu from '@front/components/userMenu/userMenu';

import './profileButton.vars.css';
import styles from './profileButton.module.css';

const auth = getAuth();

const ProfileButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdownWrapper}>
      <MDropdown
        dropdownContentClassName={clsx(
          styles.menuDropdownContainer,
          styles.top
        )}
        noPadding={false}
        align="right"
        stretch={false}
        open={open}
        onClose={() => setOpen(false)}
        dropdownContent={<UserMenu />}
      >
        <MFlex
          direction="row"
          gap="m"
          align="center"
          justify="end"
          onClick={() => setOpen((currentState) => !currentState)}
          className={styles.menu}
        >
          {auth.currentUser?.photoURL && (
            <Avatar
              src={auth.currentUser.photoURL}
              alt={auth.currentUser?.displayName ?? ''}
            />
          )}
          {/* <MText className={styles.username}>{auth.currentUser?.displayName}</MText> */}
        </MFlex>
      </MDropdown>
    </div>
  );
};

export default ProfileButton;
