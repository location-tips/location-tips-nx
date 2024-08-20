import React, { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import './LinkButton.vars.css';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './LinkButton.module.css';

type LinkButtonProps = LinkProps &
  PropsWithChildren<{
    href: string;
    mode?: 'link' | 'secondary';
  }>;

export const LinkButton = ({
  href,
  children,
  mode = 'link',
  ...linkProps
}: LinkButtonProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(styles[mode], pathname === href && styles.active)}
      {...linkProps}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
