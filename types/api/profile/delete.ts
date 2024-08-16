import type { TProfile } from '../../generic/profile';

export type DeleteProfileRequest = Pick<TProfile, 'uid'>;

export type DeleteProfileResponse = Pick<TProfile, 'uid'>;
