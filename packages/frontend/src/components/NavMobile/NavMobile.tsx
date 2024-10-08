import React from 'react';
import clsx from 'clsx';

import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import { MdiClose } from '@front/icons/MdiClose';
import { LinkButton } from '@front/components/LinkButton';

import './NavMobile.vars.css';
import styles from './NavMobile.module.css';

type NavMobileProps = {
  open: boolean;
  onClose: () => void;
};

export const NavMobile = ({ open, onClose }: NavMobileProps) => {
  return (
    <>
      {open && <div className={styles.overlay} onClick={onClose} />}

      <MFlex
        direction="column"
        gap="3xl"
        align="center"
        justify="start"
        className={clsx(
          styles.mobileNavContainer,
          open && styles.mobileNavContainerOpen,
        )}
      >
        <MButton
          mode="transparent"
          onClick={onClose}
          size="s"
          className={styles.closeButton}
        >
          <MdiClose className={styles.closeButtonIcon} width={32} height={32} />
        </MButton>
        <nav className={styles.mobileNav}>
          <MFlex direction="column" gap="3xl" align="center" justify="center">
            <LinkButton onClick={onClose} href="/">
              Search
            </LinkButton>

            <LinkButton onClick={onClose} href="/sets">
              Author&apos;s sets
            </LinkButton>

            <LinkButton onClick={onClose} href="/apps">
              Mobile App
            </LinkButton>
          </MFlex>
        </nav>
      </MFlex>
    </>
  );
};

export default NavMobile;
