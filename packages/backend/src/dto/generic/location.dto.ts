import { ApiProperty } from '@nestjs/swagger';
import type { TBoundedLocation, TCoordinate, TGeminiResponseDescribeImage, TLocation, TLocationEntity, TLocationSearchDescription, TLocationsWithScore } from '@types';

export class CoordinateDTO implements TCoordinate {
    @ApiProperty({ description: 'Latitude of the location', type: 'number' })
    latitude: number;

    @ApiProperty({ description: 'Longitude of the location', type: 'number' })
    longitude: number;
}

export class LocationDTO implements TLocation {
    @ApiProperty({ description: 'Coordinates of the location', type: CoordinateDTO })
    coordinates: TCoordinate;

    @ApiProperty({ description: 'Name of the location' })
    name: string;

    @ApiProperty({ description: 'Type of the location' })
    type: string;
}

export class ImageDTO implements TGeminiResponseDescribeImage {
    @ApiProperty({ description: 'Keywords extracted from the image' })
    keywords: string[];

    @ApiProperty({ description: 'Description of the image' })
    description: string;

    @ApiProperty({ description: 'Location of the image', type: LocationDTO })
    location?: TLocation;
}

export class LocationEntityDTO implements TLocationEntity {
    @ApiProperty({ description: 'Unique identifier of the location entity' })
    id?: string;

    @ApiProperty({ description: 'Date and time when the location entity was created' })
    createdAt?: Date;

    @ApiProperty({ description: 'Date and time when the location entity was last updated' })
    updatedAt?: Date;

    @ApiProperty({ description: 'Location entity data', type: LocationDTO })
    location: TLocation;

    @ApiProperty({ description: 'Keywords extracted from the image', type: 'array', items: { type: 'string' } })
    keywords: string[];

    @ApiProperty({ description: 'Description of the image' })
    description: string;

    @ApiProperty({ description: 'Image data', type: ImageDTO })
    image?: TGeminiResponseDescribeImage & { url: string; };
}

export class LocationsWithScoreDTO extends LocationEntityDTO implements TLocationsWithScore {
    @ApiProperty({
        description: 'Score of the location entity',
    })
    score: number;
}

export class LocationSearchDescriptionDTO implements TLocationSearchDescription {
    @ApiProperty({
        description: 'Locations near the search query',
        type: LocationDTO,
        isArray: true,
    })
    near?: TLocation[];

    @ApiProperty({
        description: 'Locations in which the search query is contained',
        type: LocationDTO,
        isArray: true,
    })
    in?: TBoundedLocation[];

    @ApiProperty({
        description: 'Location of the search query',
        type: LocationDTO,
    })
    location: TLocation[];

    @ApiProperty({
        description: 'Distance from the search query to the location',
    })
    distance?: string;

    @ApiProperty({
        description: 'Description of the search query',
    })
    description: string;

    @ApiProperty({
        description: 'Prompt for the search query',
    })
    prompt: string;
}
