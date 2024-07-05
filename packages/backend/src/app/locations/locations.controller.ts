import { Body, Controller, Post, Req } from '@nestjs/common';
import { FastifyRequest } from 'fastify';


import { LocationsService } from './locations.service';
import { SearchLocationDto } from 'packages/backend/src/dto/searchLocation.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  async postLocations(@Body('searchText') searchText: string) {
    const queryDescription = await this.locationsService.describeSearchQuery(searchText);

    // Request from vector db
    const searchResult = await this.locationsService.searchLocation(searchText, queryDescription);

    const locations = await this.locationsService.getLocationsByIds(searchResult.ids[0]); 

    const locationsWithDistaces = locations.map((location, index) => {
      const distance = searchResult.distances[0][index];
      delete location.image;
      return { ...location, score: (1 / distance * 10).toFixed(1)};
    });


    return { searchResult: locationsWithDistaces, queryDescription };
  }

}
