import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { PostLocationsResponseDTO, PostLocationsRequestDTO } from '@back/dto';
import {
  ApiResponse,
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiConsumes
} from '@nestjs/swagger';
import {
  File as FastifyFile,
  FileFieldsInterceptor
} from '@nest-lab/fastify-multer';

@ApiTags('locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  @ApiOperation({ summary: 'Search location by given prompt' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: PostLocationsResponseDTO
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Locations search request.',
    type: PostLocationsRequestDTO
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'voice', maxCount: 1 }
    ])
  )
  async postLocations(
    @Body() locationsRequestDTO: PostLocationsRequestDTO,
    @UploadedFiles() files: { image?: FastifyFile; voice?: FastifyFile }
  ) {
    const { searchText } = locationsRequestDTO;

    const { image, voice } = files;

    let imageFile: File;
    let voiceFile: File;

    if (image?.[0]?.size) {
      const imageFileBlob = new Blob([image[0].buffer], {
        type: image[0].mimetype
      });
      imageFile = new File([imageFileBlob], image[0].originalname, {
        type: image[0].mimetype
      });
    }

    if (voice?.[0]?.size) {
      const voiceFileBlob = new Blob([voice[0].buffer], {
        type: voice[0].mimetype
      });
      voiceFile = new File([voiceFileBlob], voice[0].originalname, {
        type: voice[0].mimetype
      });
    }

    // Parse search query with gemini ai
    const queryDescription = await this.locationsService.describeSearchQuery(
      searchText,
      imageFile,
      voiceFile
    );

    const finalPrompt =
      queryDescription.prompt +
      (queryDescription.image ?? '') +
      (queryDescription.voiceKeywords ?? '');

    const locations = await this.locationsService.searchLocations(
      finalPrompt,
      queryDescription
    );

    return { searchResult: locations, queryDescription };
  }
}
