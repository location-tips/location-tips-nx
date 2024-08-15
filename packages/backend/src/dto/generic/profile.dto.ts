import { ApiProperty } from '@nestjs/swagger';
import { TProfile } from '@types';

export class ProfileDTO implements TProfile {
  @ApiProperty({ description: 'User id' })
  uid: string;

  @ApiProperty({ description: 'User name' })
  name?: string;

  @ApiProperty({ description: 'User description' })
  description?: string;
}
