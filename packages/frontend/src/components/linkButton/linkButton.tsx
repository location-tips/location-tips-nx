import React, { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./linkButton.module.css";

type LinkButtonProps = PropsWithChildren<{
    href: string;
}>;

const LinkButton = ({ href, children }: LinkButtonProps) => {
    return (
        <Link href={href} className={styles.link}>{children}</Link>
    );
}

export default LinkButton;