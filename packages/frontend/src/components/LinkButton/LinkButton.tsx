'use client';

import React, { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import './LinkButton.vars.css';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './LinkButton.module.css';

type LinkButtonProps = LinkProps &
  PropsWithChildren<{
    mode?: 'link' | 'secondary';
  }>;

export const LinkButton = ({
  children,
  mode = 'link',
  ...linkProps
}: LinkButtonProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={clsx(
        styles[mode],
        pathname === linkProps.href && styles.active,
      )}
      {...linkProps}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
