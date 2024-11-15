import type { TLocationEntity } from '@types';

export type TDeleteLocationRequest = Pick<TLocationEntity, 'id'>;

export type TDeleteLocationResponse = Pick<TLocationEntity, 'id'>;
