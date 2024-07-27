import { ApiProperty } from '@nestjs/swagger';
import type { DeleteLocationSetRequest, DeleteLocationSetResponse } from '@types';

export class DeleteLocationsSetRequestDTO implements DeleteLocationSetRequest {
    @ApiProperty({ description: 'Unique identifier of the locatios sets entity' })
    id: string;
}

export class DeleteLocationsSetResponseDTO implements DeleteLocationSetResponse {
    @ApiProperty({ description: 'Unique identifier of the locatio set entity' })
    id: string;
}