import React from 'react';
import clsx from 'clsx';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import LinkButton from '@front/components/linkButton/linkButton';

import './navMobile.vars.css';
import styles from './navMobile.module.css';
import { MdiClose } from '@front/icons/MdiClose';

type NavMobileProps = {
  open: boolean;
  onClose: () => void;
};

const NavMobile = ({ open, onClose }: NavMobileProps) => {
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
          open && styles.mobileNavContainer__open,
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
            <LinkButton active={true} href="/">
              Search
            </LinkButton>
            <LinkButton href="/sets">Author&apos;s sets</LinkButton>
            <LinkButton href="/apps">Mobile App</LinkButton>
          </MFlex>
        </nav>
      </MFlex>
    </>
  );
};

export default NavMobile;
