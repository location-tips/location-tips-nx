'use client';
import React, { useState } from "react"

import { MDropdown } from "@location-tips/location-tips-uikit/atoms/MDropdown";
import { MFlex } from "@location-tips/location-tips-uikit/atoms/MFlex";
import { MText } from "@location-tips/location-tips-uikit/atoms/MText";
import { getAuth } from "firebase/auth";
import Avatar from "../avatar/avatar";
import UserMenu from "../userMenu/userMenu";

import styles from "./profileButton.module.css";

const auth = getAuth();

const ProfileButton = () => {
    const [open, setOpen] = useState(false);

    return <MDropdown noPadding={true} align="right" stretch={false} open={open} onClose={() => setOpen(false)} dropdownContent={<UserMenu />}>
            <MFlex direction="row" gap="m" align="center" justify="end" onClick={() => setOpen((currentState) => !currentState)} className={styles.menu}>
                {auth.currentUser?.photoURL && <Avatar src={auth.currentUser.photoURL} alt={auth.currentUser?.displayName ?? ""} />}
                <MText className={styles.username}>{auth.currentUser?.displayName}</MText>
            </MFlex>
        </MDropdown>;
}

export default ProfileButton;