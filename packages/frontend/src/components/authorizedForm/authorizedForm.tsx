import { getAuth, User } from "firebase/auth";
import { DetailedHTMLProps, FormHTMLAttributes, useEffect, useState } from "react";
import "@front/utils/configureFirebase";

const auth = getAuth();

const AuthorizedForm = ({ children, ...restProps }: DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(onAuthChange);

        return () => {
            unsubscribe();
        };
    }, []);

    const onAuthChange = async (user: User | null) => {
        if (user) {
            const token = await user.getIdToken();

            setToken(token);
        } else {
            setToken(null);
        }
    };

    return <form {...restProps}>
        {token && <input type="hidden" name="token" value={token} />}
        {children}
    </form>;
}

export default AuthorizedForm;