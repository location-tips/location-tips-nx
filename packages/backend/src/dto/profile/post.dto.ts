import { ProfileDTO } from '@back/dto/generic/profile.dto';

import type { PostProfileRequest, PostProfileResponse } from '@types';

export class PostProfileRequestDTO
  extends ProfileDTO
  implements PostProfileRequest {}

export class PostProfileResponseDTO
  extends ProfileDTO
  implements PostProfileResponse {}
