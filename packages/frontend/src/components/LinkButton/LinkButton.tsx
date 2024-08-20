import React, { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import './LinkButton.vars.css';
import styles from './LinkButton.module.css';

type LinkButtonProps = LinkProps &
  PropsWithChildren<{
    href: string;
  }>;

export const LinkButton = ({
  href,
  children,
  ...linkProps
}: LinkButtonProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(styles.link, pathname === href && styles.active)}
      {...linkProps}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
