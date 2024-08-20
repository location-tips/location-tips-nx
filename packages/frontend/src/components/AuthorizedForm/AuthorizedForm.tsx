import { getAuth, type User } from 'firebase/auth';
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import '@front/utils/configureFirebase';

const auth = getAuth();

type AuthorizedFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

export const AuthorizedForm = forwardRef<HTMLFormElement, AuthorizedFormProps>(
  ({ children, ...restProps }: AuthorizedFormProps, ref) => {
    const [token, setToken] = useState<string | null>(null);
    const [uid, setUid] = useState<string | null>(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(onAuthChange);

      return () => {
        unsubscribe();
      };
    }, []);

    const onAuthChange = async (user: User | null) => {
      if (user) {
        const token = await user.getIdToken();
        const uid = user.uid;

        setToken(token);
        setUid(uid);
      } else {
        setToken(null);
        setUid(null);
      }
    };

    return (
      <form {...restProps} ref={ref}>
        {token && <input type="hidden" name="token" value={token} />}
        {uid && <input type="hidden" name="uid" value={uid} />}
        {children}
      </form>
    );
  },
);

AuthorizedForm.displayName = 'AuthorizedForm';

export default AuthorizedForm;
