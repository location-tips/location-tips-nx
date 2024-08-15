import { ApiProperty } from '@nestjs/swagger';
import type { DeleteProfileRequest, DeleteProfileResponse } from '@types';

export class DeleteProfileRequestDTO implements DeleteProfileRequest {
  @ApiProperty({ description: 'Unique identifier of the profile entity' })
  uid: string;
}

export class DeleteProfileResponseDTO implements DeleteProfileResponse {
  @ApiProperty({ description: 'Unique identifier of the profile entity' })
  uid: string;
}
