'use client';
import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import clsx from 'clsx';

import { MDropdown } from '@location-tips/location-tips-uikit/atoms/MDropdown';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';

import { Avatar } from '@front/components/Avatar';
import { UserMenu } from '@front/components/UserMenu';

import './ProfileButton.vars.css';
import styles from './ProfileButton.module.css';

const auth = getAuth();

export const ProfileButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdownWrapper}>
      <MDropdown
        dropdownContentClassName={clsx(
          styles.menuDropdownContainer,
          styles.top,
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
        </MFlex>
      </MDropdown>
    </div>
  );
};

export default ProfileButton;
