'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

import { LoginForm } from '@front/components/LoginForm';
import { LinkButton } from '@front/components/LinkButton';
import { Logo } from '@front/components/Logo';
import usePlatform from '@front/stores/usePlatform';
import { MdiHamburgerMenu } from '@front/icons/MdiHamburgerMenu';
import { NavMobile } from '../NavMobile';

import './Header.vars.css';
import styles from './Header.module.css';

export const Header = () => {
  const platform = usePlatform((state) => state.platform);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavBarOpen((isNavBarOpen) => !isNavBarOpen);
  };

  return (
    <MCard
      borderLeftBottomRadius="none"
      borderLeftTopRadius="none"
      borderRightBottomRadius="none"
      borderRightTopRadius="none"
      shadow={false}
      justify="center"
      className={styles.headerContainer}
    >
      <header className={styles.header}>
        {platform === 'web-mobile' && (
          <>
            <MButton
              className={clsx(styles.hamburgerButton)}
              mode="transparent"
              size="s"
              onClick={toggleNavbar}
            >
              <MdiHamburgerMenu
                className={styles.hamburgerIcon}
                width={40}
                height={40}
              />
            </MButton>
            <NavMobile open={isNavBarOpen} onClose={toggleNavbar} />
          </>
        )}
        <div className={styles.logo}>
          <Logo />
        </div>
        {platform !== 'web-mobile' && (
          <nav className={styles.navigation}>
            <MFlex
              direction="row"
              align="center"
              justify="space-between"
              className={styles.navigationContainer}
            >
              <LinkButton active={true} href="/">
                Search
              </LinkButton>
              <LinkButton href="/sets">Author&apos;s sets</LinkButton>
              <LinkButton href="/apps">Mobile App</LinkButton>
            </MFlex>
          </nav>
        )}
        <div className={styles.accountButtons}>
          <LoginForm />
        </div>
      </header>
    </MCard>
  );
};

export default Header;
