import { ProfileDTO } from '@back/dto/generic/profile.dto';
import type { PutProfileRequest, PutProfileResponse } from '@types';

export class PutProfileRequestDTO extends ProfileDTO implements PutProfileRequest {
}

export class PutProfileResponseDTO extends ProfileDTO implements PutProfileResponse {
}