import { ApiProperty } from '@nestjs/swagger';
import type { TBoundedLocation, TCoordinate, TGeminiResponseDescribeImage, TImages, TLocation, TLocationEntity, TLocationInResult, TLocationSearchDescription, TLocationsWithImages, TLocationsWithScore } from '@types';

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
    @ApiProperty({ description: 'Title of the image' })
    title: string;

    @ApiProperty({ description: 'Keywords extracted from the image' })
    keywords: string[];

    @ApiProperty({ description: 'Description of the image' })
    description: string;

    @ApiProperty({ description: 'Location of the image', type: LocationDTO })
    location?: TLocation;
}

export class LocationEntityDTO implements Omit<TLocationEntity, 'embedding_field'> {
    @ApiProperty({ description: 'Geohash of the location' })
    geohash: string;

    @ApiProperty({ description: 'Unique identifier of the location entity' })
    id?: string;

    @ApiProperty({ description: 'Unique identifier of the user' })
    uid: string;

    @ApiProperty({ description: 'Date and time when the location entity was created' })
    createdAt?: Date;

    @ApiProperty({ description: 'Date and time when the location entity was last updated' })
    updatedAt?: Date;

    @ApiProperty({ description: 'Location entity data', type: LocationDTO })
    location: TLocation;

    @ApiProperty({ description: 'Place title given by user or AI' })
    title: string;

    @ApiProperty({ description: 'User description of the location' })
    userDescription?: string;

    @ApiProperty({ description: 'Keywords extracted from the image', type: 'array', items: { type: 'string' } })
    keywords: string[];

    @ApiProperty({ description: 'Description of the image' })
    description: string;

    @ApiProperty({ description: 'Image data', type: ImageDTO })
    image?: TGeminiResponseDescribeImage & { url: string; };
}

export class ImagesDTO implements TImages {
    @ApiProperty({ description: 'Original quality image URL' })
    original: string;

    @ApiProperty({ description: 'Small quality image URL' })
    small: string;

    @ApiProperty({ description: 'Medium quality image URL' })
    medium: string;
}

export class LocationWithImagesEntityDTO extends LocationEntityDTO implements TLocationsWithImages {
    @ApiProperty({ description: 'Images with different quality', type: ImagesDTO })
    images: TImages;
}

export class LocationsWithScoreDTO extends LocationWithImagesEntityDTO implements TLocationInResult {
    
    @ApiProperty({
        description: 'Locations in the same place and similar to search query',
        type: LocationWithImagesEntityDTO,
        isArray: true,
    })
    nearest: TLocationsWithImages[];
    
    @ApiProperty({
        description: 'Score of the location entity',
    })
    score: number;
}

export class LocationSearchDescriptionDTO implements TLocationSearchDescription {
    @ApiProperty({
        description: 'Original prompt for the search query without translation and processing',
    })
    originalPrompt: string;
    
    @ApiProperty({
        description: 'Image prompt for the search query',
    })
    image?: string;

    @ApiProperty({
        description: 'Voice request to search',
    })
    voice?: string;

    @ApiProperty({
        description: 'Keywords extracted from the voice request',
    })
    voiceKeywords?: string;

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
