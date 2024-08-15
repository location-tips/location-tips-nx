import { FavouritesDTO } from '@back/dto';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteFavouritesRequestDTO {
  @ApiProperty({
    description: 'Unique identifier of the Favourites location to delete'
  })
  locationId?: string;
}

export class DeleteFavouritesResponseDTO extends FavouritesDTO {}
