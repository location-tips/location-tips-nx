import type { TProfile } from '../../generic/profile';

export type TDeleteProfileRequest = Pick<TProfile, 'uid'>;

export type TDeleteProfileResponse = Pick<TProfile, 'uid'>;
