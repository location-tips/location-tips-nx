import type { TLocation, TLocationEntity, TLocationsWithImages } from '../../generic/location';

export type PutLocationRequest = Pick<TLocationEntity, 'id'> & Partial<Pick<TLocationEntity, 'title' | 'userDescription'>> & {
    location?: TLocation['coordinates'];
};

export type PutLocationResponse = TLocationsWithImages;