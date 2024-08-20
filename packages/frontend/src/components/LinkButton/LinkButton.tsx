import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import './LinkButton.vars.css';
import styles from './LinkButton.module.css';

type LinkButtonProps = PropsWithChildren<{
  href: string;
  onClick?: () => void;
}>;

export const LinkButton = ({ href, children, onClick }: LinkButtonProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(styles.link, pathname === href && styles.active)}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
