import {
  Body,
  Controller,
  Delete,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
  UseGuards,
  Request,
  Get,
  Param,
} from '@nestjs/common';
import pgvector from 'pgvector/knex';
import { FileInterceptor, File as FastifyFile } from '@nest-lab/fastify-multer';
import { FRequest } from 'fastify';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { geohashForLocation } from 'geofire-common';

import {
  PostLocationRequestDTO,
  PostLocationResponseDTO,
  DeleteLocationRequestDTO,
  DeleteLocationResponseDTO,
  PutLocationRequestDTO,
  PutLocationResponseDTO,
} from '@back/dto';
import { getEmbeddings } from '@back/utils/vertex';
import { AuthGuard } from '@back/app/guards/auth.guard';
import { GetLocationResponseDTO } from '@back/dto/location/get.dto';
import { getCategory } from '@back/utils/getCategory';
import { DBService } from '@back/app/db/db.service';

import { LocationService } from './location.service';

import type { LocationEntity, TLocation } from '@types';

@ApiTags('location')
@Controller('location')
export class LocationController {
  constructor(
    private readonly locationService: LocationService,
    private readonly dbService: DBService,
  ) {}

  // MARK: - GET Get location by id
  @Get(':id')
  @ApiOperation({ summary: 'Get location by id' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: GetLocationResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  async getLocation(@Param('id') id: string) {
    const doc = await this.dbService.getLocationById(id);
    const nearest = await this.dbService.getNearestLocations(doc.geohash);

    return { doc, nearest: nearest ?? [] };
  }

  // MARK: - POST Create new location
  @Post()
  @ApiOperation({ summary: 'Create new location' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: PostLocationResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Image file of location.',
    type: PostLocationRequestDTO,
  })
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async postLocation(
    @UploadedFile() image: FastifyFile,
    @Request() req: FRequest,
  ) {
    // Convert to webp
    const imageFileBlob = new Blob([image.buffer], { type: image.mimetype });
    const imageFile = new File([imageFileBlob], image.originalname, {
      type: image.mimetype,
    });
    const webp = await this.locationService.convertToWebp(imageFile);
    // Save to CDN
    const newFilename = await this.locationService.uploadToCDN(webp);
    // Extract exif
    const exif = await this.locationService.extractExif(image.buffer);
    // Get description
    const description = await this.locationService.getImageDescription(
      webp,
      exif,
    );

    const locationData: TLocation = {
      coordinates: {
        latitude:
          exif.gps?.Latitude ??
          description.location?.coordinates?.latitude ??
          0,
        longitude:
          exif.gps?.Longitude ??
          description.location?.coordinates?.longitude ??
          0,
      },
      name: description.location?.name,
      type: description.location?.type,
      description: description.location.description,
    };

    const geohash = geohashForLocation([
      locationData.coordinates.latitude,
      locationData.coordinates.longitude,
    ]);

    const embeddings = await getEmbeddings(
      locationData.description +
        ' ' +
        description.keywords.join(' ') +
        ' ' +
        locationData.name +
        ' ' +
        locationData.type +
        ' ' +
        locationData.description,
    );

    const imagesSizes = await this.locationService.getImages(newFilename);

    const imageEntity = {
      id: newFilename,
      ...imagesSizes,
      description: description.description,
      exif: JSON.stringify(exif),
    };

    await this.dbService.insertImages([imageEntity]);

    const newLocation: Omit<LocationEntity, 'id'> = {
      uid: req.user.uid,
      embedding: pgvector.toSql(embeddings[0]),
      geohash: geohash,
      type: getCategory(locationData.type),
      locationName: locationData.name,
      latitude: locationData.coordinates.latitude,
      longitude: locationData.coordinates.longitude,
      altitude: exif?.gps?.Altitude ?? 0,
      keywords: description.keywords.join(','),
      title: description.location?.name ?? '',
      userDescription: '',
      description: description.description,
      image: newFilename,
    };

    const [location] = await this.dbService.insertLocations([newLocation]);

    delete location.embedding;
    delete location.image;

    return { ...newLocation, images: imagesSizes };
  }

  // MARK: - PUT Update location
  @Put()
  @ApiOperation({ summary: 'Update location' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully updated.',
    type: PutLocationResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @ApiBody({
    description: 'Custom data for location.',
    type: PutLocationRequestDTO,
  })
  async putLocation(@Body() data: PutLocationRequestDTO) {
    const { id, ...updateData } = data;

    const [location] = await this.dbService.updateLocation(id, updateData);

    const images = await this.locationService.getImages(location.image);

    return { ...location, images };
  }

  // MARK: - DELETE Remove location
  @Delete()
  @ApiOperation({ summary: 'Remove location' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully deleted.',
    type: DeleteLocationResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @ApiBody({
    description: 'Remove location.',
    type: DeleteLocationRequestDTO,
  })
  async deleteLocation(@Body() { id }: DeleteLocationRequestDTO) {
    const [location] = await this.dbService.deleteLocation(id);
    const [images] = await this.dbService.deleteImage(location.image);

    // Remove from CDN
    await this.locationService.removeFromCDN(images[0]?.original);
    await this.locationService.removeFromCDN(images[0]?.medium);
    await this.locationService.removeFromCDN(images[0]?.small);

    return { id };
  }
}
