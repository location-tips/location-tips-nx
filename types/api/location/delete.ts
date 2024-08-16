import type { TLocationEntity } from '../../generic/location';

export type DeleteLocationRequest = Pick<TLocationEntity, 'id'>;

export type DeleteLocationResponse = Pick<TLocationEntity, 'id'>;
