import { UidIdentifier } from '@types';

export type TLocationSetEntity = {
  id?: string;
  uid: UidIdentifier;
  name: string;
  description?: string;
};
