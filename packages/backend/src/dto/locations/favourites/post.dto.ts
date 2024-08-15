import { FavouritesDTO } from '@back/dto/generic';
import { ApiProperty } from '@nestjs/swagger';

export class PostFavouritesRequestDTO {
  @ApiProperty({
    description: 'Unique identifier of the Favourites location to add'
  })
  locationId: string;
}

export class PostFavouritesResponseDTO extends FavouritesDTO {}
