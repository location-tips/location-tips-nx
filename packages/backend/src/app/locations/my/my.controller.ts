import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';

import { FRequest } from 'fastify';
import { MyService } from './my.service';
import { LocationsService } from '@back/app/locations/locations.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';
import { GetMyLocationsResponseDTO } from '@back/dto';

import { AuthGuard } from '@back/app/guards/auth.guard';

@ApiTags('locations')
@Controller('locations/my')
export class MyController {
  constructor(
    private readonly myService: MyService,
    private readonly locationsService: LocationsService
  ) {}

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get my by user id' })
  @ApiResponse({
    status: 201,
    description: 'List of my locations.',
    type: GetMyLocationsResponseDTO
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @UseGuards(AuthGuard)
  async getMy(@Query('offset') offset, @Request() req: FRequest) {
    const my = await this.myService.getUserLocations(req.user.uid, offset);

    const mappedFavorites = await Promise.all(
      my.map(async (location) => {
        const loc = location;

        delete loc.image.exif;
        delete loc.embedding_field;

        return {
          ...loc,
          images: await this.locationsService.getImages(loc.image.url),
          nearest: [] // TODO: implement optimisation to nearest
          // nearest: await this.locationsService.getNearestLocations(loc.geohash),
        };
      })
    );

    return { my: mappedFavorites };
  }
}
