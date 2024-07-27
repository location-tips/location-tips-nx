import { Body, Controller, Post } from '@nestjs/common';
import { LocationsSetsService } from './locationsSets.service';
import { PostLocationsSetsResponseDTO, PostLocationsSetsRequestDTO } from '@back/dto';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('locations')
@Controller('locations/sets')
export class LocationsSetsController {
  constructor(private readonly locationsSetsService: LocationsSetsService) {}

  @Post()
  @ApiOperation({ summary: 'Search locations sets by given prompt' })
  @ApiResponse({ status: 201, description: 'The records has been successfully found.', type: PostLocationsSetsResponseDTO })
  @ApiResponse({ status: 500, description: 'Server error.'})
  async postLocationsSets(@Body() { searchText, uid, offset }: PostLocationsSetsRequestDTO): Promise<PostLocationsSetsResponseDTO> {

    const translatedText = await this.locationsSetsService.translateToEnglish(searchText);

    const locationssets = await this.locationsSetsService.searchLocationsSets({ searchText: translatedText.translated ?? searchText, uid, offset }); 

    return locationssets;
  }

}
