import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import './page.vars.css';
import styles from './page.module.css';

type PageProps = PropsWithChildren<{
  className?: string;
}>;

const Page = ({ children, className }: PageProps) => {
  return <main className={clsx(styles.page, className)}>{children}</main>;
};

export default Page;
