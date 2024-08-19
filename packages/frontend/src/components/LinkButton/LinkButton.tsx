import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import './LinkButton.vars.css';
import styles from './LinkButton.module.css';

type LinkButtonProps = PropsWithChildren<{
  href: string;
  active?: boolean;
  onClick?: () => void;
}>;

export const LinkButton = ({
  href,
  active = false,
  children,
  onClick,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(styles.link, active && styles.active)}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
