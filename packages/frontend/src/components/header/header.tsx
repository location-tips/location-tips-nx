'use client';

import { useState } from 'react';
import { MCard } from '@location-tips/location-tips-uikit/atoms/MCard';
import { MFlex } from '@location-tips/location-tips-uikit/atoms/MFlex';
import LoginForm from '@front/components/loginForm/loginForm';
import LinkButton from '@front/components/linkButton/linkButton';
import Logo from '@front/components/logo/logo';

import './header.vars.css';
import styles from './header.module.css';
import usePlatform from '@front/stores/usePlatform';
import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';
import { MdiHamburgerMenu } from '@front/icons/MdiHamburgerMenu';
import NavMobile from '../navMobile/navMobile';

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
      style={{ justifyContent: 'center' }} // TODO: remove default inline justify-stretch in MCard component
      className={styles.headerContainer}
    >
      <header className={styles.header}>
        {platform === 'web-mobile' && (
          <>
            <div className={styles.wrapper}>
              <MButton
                className={styles.hamburgerButton}
                style={{ padding: 0 }} // TODO: refactor MButton component so its mode styles won't override className styles
                mode="transparent"
                size="s"
                onClick={toggleNavbar}
              >
                <MdiHamburgerMenu width={40} height={40} />
              </MButton>
            </div>
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
              // TODO: fix MFlex gap styles variables. All --flex-gap-* values are missing
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
