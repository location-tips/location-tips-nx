import { ApiProperty } from '@nestjs/swagger';

import { LocationWithImagesEntityDTO } from '@back/dto/generic/location.dto';

import type { PostLocationRequest, PostLocationResponse } from '@types';

export class PostLocationRequestDTO implements PostLocationRequest {
  @ApiProperty({
    description: 'Image file of location.',
  })
  image: File;
}

export class PostLocationResponseDTO
  extends LocationWithImagesEntityDTO
  implements PostLocationResponse {}
