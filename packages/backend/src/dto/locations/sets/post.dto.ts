import { LocationsSetDTO } from '@back/dto/generic';
import { ApiProperty } from '@nestjs/swagger';
import type {
  PostLocationsSetsRequest,
  PostLocationsSetsResponse,
  TLocationsSet,
} from '@types';

export class PostLocationsSetsRequestDTO implements PostLocationsSetsRequest {
  @ApiProperty({
    description: 'User prompt for location search',
  })
  searchText: string;

  @ApiProperty({
    description: 'User id',
  })
  uid?: string;

  @ApiProperty({
    description: 'Offset for pagination',
  })
  offset?: number;
}

export class PostLocationsSetsResponseDTO implements PostLocationsSetsResponse {
  @ApiProperty({
    description: 'Locations sets array',
    type: () => LocationsSetDTO,
    isArray: true,
  })
  locationsSets: TLocationsSet[];

  @ApiProperty({
    description: 'Count of locations',
  })
  count: number;
}
