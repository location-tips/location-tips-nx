import { LocationsSetDTO } from '@back/dto/generic/locationSet.dto';
import type { PostLocationsSetRequest, PostLocationsSetResponse } from '@types';

export class PostLocationsSetRequestDTO extends LocationsSetDTO implements PostLocationsSetRequest {
}

export class PostLocationsSetResponseDTO extends LocationsSetDTO implements PostLocationsSetResponse {
}
