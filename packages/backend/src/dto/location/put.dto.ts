import { ApiProperty } from '@nestjs/swagger';

import {
  CoordinateDTO,
  LocationWithImagesEntityDTO,
} from '@back/dto/generic/location.dto';

import type {
  PutLocationRequest,
  PutLocationResponse,
  TLocation,
  LocationEntity,
} from '@types';

export class PutLocationRequestDTO implements PutLocationRequest {
  @ApiProperty({ description: 'Unique identifier of the location entity' })
  id: number;

  @ApiProperty({ description: 'Place title given by user or AI' })
  title?: string;

  @ApiProperty({ description: 'User description of the location' })
  userDescription?: LocationEntity['userDescription'];

  @ApiProperty({
    description: 'Coordinates of the location',
    type: CoordinateDTO,
  })
  location?: TLocation['coordinates'];
}

export class PutLocationResponseDTO
  extends LocationWithImagesEntityDTO
  implements PutLocationResponse
{
  type?: LocationEntity['type'];
  locationName?: string;
  latitude: number;
  longitude: number;
  altitude: number;
  embedding: number[];
}
