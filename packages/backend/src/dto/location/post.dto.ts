import { LocationWithImagesEntityDTO } from '@back/dto/generic/location.dto';
import { ApiProperty } from '@nestjs/swagger';
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
