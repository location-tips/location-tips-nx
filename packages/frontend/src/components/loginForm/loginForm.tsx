'use client';

import { useEffect, useMemo, useState } from "react";
import GoogleLoginButton from "@front/components/loginForm/loginButtons/googleLoginButton";
import { MButton } from "@location-tips/location-tips-uikit/atoms/MButton";
import { MDropdown } from "@location-tips/location-tips-uikit/atoms/MDropdown";
import { MFlex } from "@location-tips/location-tips-uikit/atoms/MFlex";
import ProfileButton from "@front/components/profileButton/profileButton";
import { getAuth, User } from "firebase/auth";
import "@front/utils/configureFirebase";

const auth = getAuth();

const LoginForm = () => {
    const [currentUser, setCurrentUser] = useState(auth.currentUser);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const isAuthenticated = useMemo(() => currentUser !== null, [currentUser]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(onAuthChange);

        return () => {
            unsubscribe();
        };
    }, []);

    const onAuthChange = (user: User | null) => {
        setCurrentUser(user);
    };

    const handleLoginSuccess = (token: string, user: User) => {
        // Handle successful login
        // console.log(token, user);
    };  

    const handleLoginFailure = (error: Error) => {
        // Handle failed login
        console.error(error);
    };

    const toggleDropdownOpen = () => {
        setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
    }

    return <MFlex direction="column" justify="center" align="end">
        {!isAuthenticated && 
            <MDropdown onClose={() => { setDropdownOpen(true) }} noPadding={true} dropdownContent={<GoogleLoginButton auth={auth} onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />} open={dropdownOpen} align="right" stretch={false}>
                <MButton onClick={toggleDropdownOpen}>Sign In</MButton>
            </MDropdown>
        }
        {isAuthenticated && <ProfileButton />}
    </MFlex>
};

export default LoginForm;