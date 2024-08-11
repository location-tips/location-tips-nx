import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import './linkButton.vars.css';
import styles from './linkButton.module.css';

type LinkButtonProps = PropsWithChildren<{
  href: string;
  active?: boolean;
}>;

const LinkButton = ({ href, active = false, children }: LinkButtonProps) => {
  return (
    <Link href={href} className={clsx(styles.link, active && styles.active)}>
      {children}
    </Link>
  );
};

export default LinkButton;
