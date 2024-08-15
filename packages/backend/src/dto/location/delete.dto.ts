import { ApiProperty } from '@nestjs/swagger';
import type { DeleteLocationRequest, DeleteLocationResponse } from '@types';

export class DeleteLocationRequestDTO implements DeleteLocationRequest {
  @ApiProperty({ description: 'Unique identifier of the location entity' })
  id?: string;
}

export class DeleteLocationResponseDTO implements DeleteLocationResponse {
  @ApiProperty({ description: 'Unique identifier of the location entity' })
  id?: string;
}
