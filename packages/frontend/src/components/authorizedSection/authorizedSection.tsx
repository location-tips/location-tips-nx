import { getAuth, User } from "firebase/auth";
import { PropsWithChildren, useEffect, useState } from "react";
import "@front/utils/configureFirebase";

const auth = getAuth();

type AuthorizedSectionProps = PropsWithChildren<{}>;

const AuthorizedSection = (({ children }: AuthorizedSectionProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(onAuthChange);

        return () => {
            unsubscribe();
        };
    }, []);

    const onAuthChange = async (user: User | null) => {
        if (user) {
            setCurrentUser(user);
        } else {
            setCurrentUser(null);
        }
    };

    return <>{currentUser ? children : null}</>;
});

export default AuthorizedSection;