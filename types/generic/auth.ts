export type UidIdentifier = string;

export type EmailIdentifier = string;

export type AvailableProviders = 'google.com' | 'facebook.com';

export type Providers = Record<AvailableProviders, string[]> & {
  email: string[];
};

export type FirebaseTokenData = {
  identities: Providers;
  sign_in_provider: AvailableProviders;
};

export type TokenPayload = {
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
