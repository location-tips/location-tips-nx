import { ApiProperty } from '@nestjs/swagger';

import { FavouritesDTO } from '@back/dto/generic';

export class PostFavouritesRequestDTO {
  @ApiProperty({
    description: 'Unique identifier of the Favourites location to add',
  })
  locationId: string;
}

export class PostFavouritesResponseDTO extends FavouritesDTO {}
