import type { TLocationSetEntity } from '@types';

export type TDeleteLocationSetRequest = Pick<TLocationSetEntity, 'id'>;

export type TDeleteLocationSetResponse = Pick<TLocationSetEntity, 'id'>;
