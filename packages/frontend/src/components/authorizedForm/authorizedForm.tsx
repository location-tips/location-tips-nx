import { getAuth, User } from 'firebase/auth';
import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  forwardRef,
  useEffect,
  useState
} from 'react';
import '@front/utils/configureFirebase';

const auth = getAuth();

type AuthorizedFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const AuthorizedForm = forwardRef<HTMLFormElement, AuthorizedFormProps>(
  ({ children, ...restProps }: AuthorizedFormProps, ref) => {
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

    return (
      <form {...restProps} ref={ref}>
        {token && <input type="hidden" name="token" value={token} />}
        {children}
      </form>
    );
  }
);

export default AuthorizedForm;
