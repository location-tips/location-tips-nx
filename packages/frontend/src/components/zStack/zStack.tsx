import { PropsWithChildren } from "react";
import styles from "./zStack.module.css";

type ZStackProps = {}

const ZStack = ({ children }: PropsWithChildren<ZStackProps>) => {
    return (
        <div className={styles.zstack}>
            {children}
        </div>
    );
}

export default ZStack;