import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import './LinkButton.vars.css';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './LinkButton.module.css';

type LinkButtonProps = PropsWithChildren<{
  href: string;
  active?: boolean;
  mode?: 'link' | 'secondary';
}>;

export const LinkButton = ({
  href,
  active = false,
  children,
  mode = 'link',
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(styles[mode], { [styles.active]: active })}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
