import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import './Page.vars.css';
import styles from './Page.module.css';

type PageProps = PropsWithChildren<{
  className?: string;
}>;

export const Page = ({ children, className }: PageProps) => {
  return <main className={clsx(styles.page, className)}>{children}</main>;
};

export default Page;
