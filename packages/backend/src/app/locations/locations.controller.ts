import { Body, Controller, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { PostLocationsResponseDTO, PostLocationsRequestDTO } from '@back/dto/postLocations.dto';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { TLocationEntity } from '@types';

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

    // Translate search text to english
    // TODO: Add here any local service to detect the language of the search text without requesting to the gemini api
    const translatedText = await this.locationsService.translateToEnglish(searchText);

    // Parse search query with gemini ai
    const queryDescription = await this.locationsService.describeSearchQuery(translatedText.translated);

    // Request from vector db
    const searchResult = await this.locationsService.searchLocation(searchText, queryDescription);

    // Request locations data from firestore to match with search result
    let locations: TLocationEntity[] = [];

    // If search result has any ids, request locations data from firestore
    if (searchResult.ids.length) {
      locations = await this.locationsService.getLocationsByIds(searchResult.ids[0]);
    }

    // Calculate score based on vectors distance (distance it is a vector distance between search query and location vectors)
    const locationsWithDistaces = locations.map((location, index) => {
      const distance = searchResult.distances[0][index];
      delete location.image;
      return { ...location, score: (1 / distance * 10).toFixed(1)};
    });

    return { searchResult: locationsWithDistaces, queryDescription };
  }

}
