import {
  Body,
  Controller,
  Delete,
  Post,
  Get,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';

import { FRequest } from 'fastify';
import { FavouritesService } from './favourites.service';
import { LocationsService } from '@back/app/locations/locations.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  PostFavouritesRequestDTO,
  PostFavouritesResponseDTO,
  DeleteFavouritesRequestDTO,
  DeleteFavouritesResponseDTO,
  GetFavouritesResponseDTO,
} from '@back/dto';

import { AuthGuard } from '@back/app/guards/auth.guard';

@ApiTags('locations')
@Controller('locations/favourites')
export class FavouritesController {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly locationsService: LocationsService,
  ) {}

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get favourites by user id' })
  @ApiResponse({
    status: 201,
    description: 'List of favourites locations.',
    type: GetFavouritesResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @UseGuards(AuthGuard)
  async getFavourites(@Query('offset') offset, @Request() req: FRequest) {
    const limit = 30;
    const doc = await this.favouritesService.getUserFavourites(req.user.uid);
    const favourites = await this.locationsService.getLocationsByIds(
      (doc.locationIds ?? []).slice(offset, limit),
    );

    const mappedFavorites = await Promise.all(
      favourites.map(async (location) => {
        const loc = location;

        delete loc.image.exif;
        delete loc.embedding_field;

        return {
          ...loc,
          images: await this.locationsService.getImages(loc.image.url),
          nearest: await this.locationsService.getNearestLocations(loc.geohash),
        };
      }),
    );

    return { favourites: mappedFavorites };
  }

  @Post()
  @ApiOperation({ summary: 'Add to favourites' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully updated.',
    type: PostFavouritesResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @UseGuards(AuthGuard)
  @ApiBody({
    description: 'Custom data for favourites.',
    type: PostFavouritesRequestDTO,
  })
  async PostFavourites(
    @Body() data: PostFavouritesRequestDTO,
    @Request() req: FRequest,
  ) {
    const doc = await this.favouritesService.getUserFavourites(req.user.uid);

    const favourites = doc.locationIds ?? [];

    if (favourites.includes(data.locationId)) {
      return { favourites };
    }

    favourites.push(data.locationId);

    await this.favouritesService.updateUserFavourites(req.user.uid, favourites);

    return { favourites };
  }

  @Delete()
  @ApiOperation({ summary: 'Remove from favourites' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully deleted.',
    type: DeleteFavouritesResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @UseGuards(AuthGuard)
  @ApiBody({
    description: 'Remove favourites.',
    type: DeleteFavouritesRequestDTO,
  })
  async deleteFavourites(
    @Body() { locationId }: DeleteFavouritesRequestDTO,
    @Request() req: FRequest,
  ) {
    const doc = await this.favouritesService.getUserFavourites(req.user.uid);

    const favourites = doc.locationIds ?? [];

    const index = favourites.indexOf(locationId);

    if (index > -1) {
      favourites.splice(index, 1);
    }

    await this.favouritesService.updateUserFavourites(req.user.uid, favourites);

    return { favourites };
  }
}
