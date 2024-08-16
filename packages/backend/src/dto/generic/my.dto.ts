import { ApiProperty } from '@nestjs/swagger';
import { TLocationInResult } from '@types';

import { LocationInResultDTO } from '@back/dto/generic/location.dto';

export class MyLocationsDTO {
  @ApiProperty({
    description: 'Location ids',
    isArray: true,
    type: LocationInResultDTO,
  })
  locations: TLocationInResult[];
}
