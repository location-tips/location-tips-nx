import { ApiProperty } from "@nestjs/swagger";
import { TFavouriteLocation, TLocationsSet } from "@types";

export class TFavouriteLocationDTO implements TFavouriteLocation {
    @ApiProperty({ description: 'Unique identifier of the favourite location entity' })
    id?: string;

    @ApiProperty({ description: 'User notes about this location related to set' })
    authorDescription?: string;

    @ApiProperty({ description: 'Order of the location in the set' })
    order?: number;
}

export class LocationsSetDTO implements TLocationsSet {
    @ApiProperty({ description: 'Unique identifier of the locations set entity' })
    id?: string;
    
    @ApiProperty({ description: 'User id' })
    uid: string;

    @ApiProperty({ description: 'Locations set array', type: TFavouriteLocationDTO, isArray: true })
    locations: TFavouriteLocation[];

    @ApiProperty({ description: 'User name' })
    name: string;

    @ApiProperty({ description: 'User description' })
    description?: string;
}