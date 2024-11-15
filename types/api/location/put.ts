import type { TLocationData, TLocationEntity } from '@types';

export type TPutLocationRequest = Pick<TLocationEntity, 'id'> &
  Partial<Pick<TLocationEntity, 'title' | 'userDescription'>>;

export type TPutLocationResponse = TLocationData;
