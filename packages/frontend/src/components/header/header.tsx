import { MCard } from "@location-tips/location-tips-uikit/atoms/MCard";
import { MFlex } from "@location-tips/location-tips-uikit/atoms/MFlex";
import LoginForm from "@front/components/loginForm/loginForm";
import LinkButton from "@front/components/linkButton/linkButton";
import Logo from "@front/components/logo/logo";

import styles from "./header.module.css";

const Header = () => {
    return (
        <MCard borderLeftBottomRadius="none" borderLeftTopRadius="none" borderRightBottomRadius="none" borderRightTopRadius="none" shadow={false} className={styles.headerContainer}>
            <header className={styles.header}>
                <Logo />
                <nav>
                    <MFlex direction="row" gap="3xl" align="center" justify="center" className={styles.navigation}>
                        <LinkButton href="/">Search</LinkButton>
                        <LinkButton href="/sets">Author's sets</LinkButton>
                        <LinkButton href="/apps">Mobile App</LinkButton>
                    </MFlex>
                </nav>
                <LoginForm />
            </header>
        </MCard>
    );
}

export default Header;