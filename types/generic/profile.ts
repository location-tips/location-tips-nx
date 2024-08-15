import { UidIdentifier } from './auth';

export type TProfile = {
  uid: UidIdentifier;
  name?: string;
  description?: string;
};
