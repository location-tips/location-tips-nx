import { Body, Controller, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { PostLocationsResponseDTO, PostLocationsRequestDTO } from '@back/dto/postLocations.dto';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('locations')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  @ApiOperation({ summary: 'Search location by given prompt' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: PostLocationsResponseDTO })
  @ApiResponse({ status: 400, description: 'Empty request.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 500, description: 'Server error.'})
  async postLocations(@Body() locationsRequestDTO: PostLocationsRequestDTO) {
    const { searchText } = locationsRequestDTO;

    const time = Date.now();

    // Translate search text to english
    // TODO: Add here any local service to detect the language of the search text without requesting to the gemini api
    const translatedText = await this.locationsService.translateToEnglish(searchText);

    // Parse search query with gemini ai
    const queryDescription = await this.locationsService.describeSearchQuery(translatedText.translated ?? searchText);

    const locations = await this.locationsService.searchLocations(searchText, queryDescription); 

    return { searchResult: locations, queryDescription };
  }

}
