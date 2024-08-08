'use client';

import { useState } from 'react';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import LoginForm from '@front/components/loginForm/loginForm';
import LinkButton from '@front/components/linkButton/linkButton';
import Logo from '@front/components/logo/logo';
import clsx from 'clsx';
import usePlatform from '@front/stores/usePlatform';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MdiHamburgerMenu } from '@front/icons/MdiHamburgerMenu';
import NavMobile from '../navMobile/navMobile';

import './header.vars.css';
import styles from './header.module.css';

const Header = () => {
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
              style={{ padding: 0 }}
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
              style={{ gap: 56 }}
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
