'use client';

import { useEffect, useMemo, useState } from "react";
import GoogleLoginButton from "@front/components/loginForm/loginButtons/googleLoginButton";
import { MButton } from "@location-tips/location-tips-uikit/atoms/MButton";
import { MFlex } from "@location-tips/location-tips-uikit/atoms/MFlex";
import { MText } from "@location-tips/location-tips-uikit/atoms/MText";
import { getAuth, User } from "firebase/auth";
import "@front/utils/configureFirebase";

const auth = getAuth();

const LoginForm = () => {
    const [currentUser, setCurrentUser] = useState(auth.currentUser);
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
        console.log(token, user);
    };  

    const handleLoginFailure = (error: Error) => {
        // Handle failed login
        console.error(error);
    };

    const onSignOut = () => {
        // Handle sign out
        auth.signOut();
    }

    return <MFlex direction="column">
        {!isAuthenticated && <GoogleLoginButton auth={auth} onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />}
        {isAuthenticated && <MFlex gap="xl">{currentUser?.displayName}<MText></MText><MButton onClick={onSignOut}>Sign Out</MButton></MFlex>}
    </MFlex>
};

export default LoginForm;