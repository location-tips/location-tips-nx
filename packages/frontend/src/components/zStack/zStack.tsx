import { PropsWithChildren } from 'react';

import styles from './zStack.module.css';

const ZStack = ({ children }: PropsWithChildren) => {
  return <div className={styles.zstack}>{children}</div>;
};

export default ZStack;
