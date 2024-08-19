import {
  signInWithPopup,
  GoogleAuthProvider,
  type User,
  type Auth,
} from 'firebase/auth';

import { MButton } from '@location-tips/location-tips-uikit/atoms/MButton';

const provider = new GoogleAuthProvider();

type GoogleLoginButtonProps = {
  onSuccess: (token: string, user: User) => void;
  onFailure: (error: Error) => void;
  auth: Auth;
};

const GoogleLoginButton = ({
  onSuccess,
  onFailure,
  auth,
}: GoogleLoginButtonProps) => {
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)

        if (token && user) {
          onSuccess(token, user);
        } else {
          onFailure(new Error('Failed to sign in with Google'));
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        onFailure(new Error(`${errorCode}: ${errorMessage}`));
      });
  };

  return (
    <MButton mode="transparent" onClick={handleGoogleLogin}>
      Google
    </MButton>
  );
};

export default GoogleLoginButton;
