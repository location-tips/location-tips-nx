import { LocationsSetDTO } from '@back/dto/generic/locationSet.dto';

import type { PutLocationsSetRequest, PutLocationsSetResponse } from '@types';

export class PutLocationsSetRequestDTO
  extends LocationsSetDTO
  implements PutLocationsSetRequest {}

export class PutLocationsSetResponseDTO
  extends LocationsSetDTO
  implements PutLocationsSetResponse {}
