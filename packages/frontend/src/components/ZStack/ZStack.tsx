import { PropsWithChildren } from 'react';

import styles from './ZStack.module.css';

export const ZStack = ({ children }: PropsWithChildren) => {
  return <div className={styles.zstack}>{children}</div>;
};

export default ZStack;
