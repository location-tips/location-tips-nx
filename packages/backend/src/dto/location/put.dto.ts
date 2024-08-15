import {
  CoordinateDTO,
  LocationWithImagesEntityDTO
} from '@back/dto/generic/location.dto';
import { ApiProperty } from '@nestjs/swagger';
import type {
  PutLocationRequest,
  PutLocationResponse,
  TLocation,
  TLocationEntity
} from '@types';

export class PutLocationRequestDTO implements PutLocationRequest {
  @ApiProperty({ description: 'Unique identifier of the location entity' })
  id?: string;

  @ApiProperty({ description: 'Place title given by user or AI' })
  title?: string;

  @ApiProperty({ description: 'User description of the location' })
  userDescription?: TLocationEntity['userDescription'];

  @ApiProperty({
    description: 'Coordinates of the location',
    type: CoordinateDTO
  })
  location?: TLocation['coordinates'];
}

export class PutLocationResponseDTO
  extends LocationWithImagesEntityDTO
  implements PutLocationResponse {}
