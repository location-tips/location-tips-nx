import { LocationSearchDescriptionDTO, LocationsWithScoreDTO } from '@back/dto/generic/location.dto';
import { ApiProperty } from '@nestjs/swagger';
import type { PostLocationsRequest, PostLocationsResponse, TLocationSearchDescription, TLocationsWithScore } from '@types';

export class PostLocationsRequestDTO implements PostLocationsRequest {
    @ApiProperty({
        description: 'User prompt for location search',
        required: false,
    })
    searchText?: string;

    @ApiProperty({
        description: 'Image file to search the similar.',
        required: false,
    })
    image?: File;

    @ApiProperty({
        description: 'Voice request to search.',
        required: false,
    })
    voice?: File;
}

export class PostLocationsResponseDTO implements PostLocationsResponse {
    @ApiProperty({
        description: 'Search result of locations with score',
        type: LocationsWithScoreDTO,
    })
    searchResult: TLocationsWithScore[];

    @ApiProperty({
        description: 'Description of the search query generated by the AI model',
        type: LocationSearchDescriptionDTO,
    })
    queryDescription: TLocationSearchDescription;
}
