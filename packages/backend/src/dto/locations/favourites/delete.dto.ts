import { ApiProperty } from '@nestjs/swagger';

import { FavouritesDTO } from '@back/dto';

export class DeleteFavouritesRequestDTO {
  @ApiProperty({
    description: 'Unique identifier of the Favourites location to delete',
  })
  locationId?: string;
}

export class DeleteFavouritesResponseDTO extends FavouritesDTO {}
