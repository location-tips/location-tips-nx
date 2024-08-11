import { ApiProperty } from "@nestjs/swagger";
import { TFavourites } from "@types";

export class FavouritesDTO implements TFavourites {
    
    @ApiProperty({ description: 'User id', type: 'string' })
    uid: string;

    @ApiProperty({ description: 'Location ids', isArray: true, type: 'string' })
    favourites: string[];
}