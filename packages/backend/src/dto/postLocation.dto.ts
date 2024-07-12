import { LocationDTO } from '@back/dto/generic/location.dto';
import { ApiProperty } from '@nestjs/swagger';
import type { PostLocationRequest, PostLocationResponse, TLocation } from '@types';

export class PostLocationRequestDTO implements PostLocationRequest {
    @ApiProperty({
        description: 'Image file of location.',
    })
    image: File;
}

export class PostLocationResponseDTO implements PostLocationResponse {
    @ApiProperty({
        description: 'Keywords extracted from the image.',
    })
    keywords: string[];

    @ApiProperty({
        description: 'Description of the image.',
    })
    description: string;

    @ApiProperty({
        description: 'Location of the image.',
        type: LocationDTO,
    })
    location?: TLocation;
}
