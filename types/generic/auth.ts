export type TUidIdentifier = string;

export type TEmailIdentifier = string;

export type TAvailableProviders = 'google.com' | 'facebook.com';

export type TProviders = Record<AvailableProviders, string[]> & {
  email: string[];
};

export type TFirebaseTokenData = {
  identities: Providers;
  sign_in_provider: AvailableProviders;
};

export type TTokenPayload = {
  name: string;
  picture: string;
  iss: string;
  aud: string;
  auth_time: number;
  user_id: UidIdentifier;
  sub: UidIdentifier;
  iat: number;
  exp: number;
  email: EmailIdentifier;
  email_verified: boolean;
  firebase: FirebaseTokenData;
  uid: UidIdentifier;
};
