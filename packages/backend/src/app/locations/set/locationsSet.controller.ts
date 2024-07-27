import { Body, Controller, Delete, Post, Put, UseInterceptors, UseGuards, Request } from '@nestjs/common';
import { FileInterceptor } from '@nest-lab/fastify-multer';
import { FRequest } from 'fastify';

import { LocationsSetService } from './locationsSet.service';
import type { TLocationsSet } from '@types';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  PostLocationsSetRequestDTO, PostLocationsSetResponseDTO,
  PutLocationsSetRequestDTO, PutLocationsSetResponseDTO,
  DeleteLocationsSetRequestDTO, DeleteLocationsSetResponseDTO,
} from '@back/dto';

import { AuthGuard } from '@back/app/guards/auth.guard';

@ApiTags('locations')
@Controller('locations/set')
export class LocationsSetController {
  constructor(private readonly locationssetService: LocationsSetService) {}

  @Post()
  @ApiOperation({ summary: 'Create new locations set' })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: PostLocationsSetResponseDTO })
  @ApiResponse({ status: 400, description: 'Empty request.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 500, description: 'Server error.'})
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({
    description: 'LocationsSet data.',
    type: PostLocationsSetRequestDTO,
  })
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async postLocationsSet(@Body() { name, locations }: PostLocationsSetRequestDTO, @Request() req: FRequest) {
    // Save to db
    const newLocationsSet: TLocationsSet = {
      uid: req.user.uid,
      name,
      locations,
    };

    await this.locationssetService.saveLocationsSetToDB(newLocationsSet);

    return newLocationsSet;
  }

  @Put()
  @ApiOperation({ summary: 'Update locationsset' })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'The record has been successfully updated.', type: PutLocationsSetResponseDTO })
  @ApiResponse({ status: 400, description: 'Empty request.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 500, description: 'Server error.'})
  @UseGuards(AuthGuard)
  @ApiBody({
    description: 'Custom data for locationsset.',
    type: PutLocationsSetRequestDTO,
  })
  async putLocationsSet(@Body() data: PutLocationsSetRequestDTO) {
    const doc = await this.locationssetService.updateLocationsSetInDB(data);

    return doc;
  }

  @Delete()
  @ApiOperation({ summary: 'Remove locations set' })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'The record has been successfully deleted.', type: DeleteLocationsSetResponseDTO })
  @ApiResponse({ status: 400, description: 'Empty request.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 500, description: 'Server error.'})
  @UseGuards(AuthGuard)
  @ApiBody({
    description: 'Remove locationsset.',
    type: DeleteLocationsSetRequestDTO,
  })
  async deleteLocationsSet(@Body() { id }: DeleteLocationsSetRequestDTO) {
    // Remove from db
    await this.locationssetService.removeLocationsSetFromDB(id);

    return { id };
  }

}
