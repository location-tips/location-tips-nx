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
import { FileInterceptor, File as FastifyFile } from '@nest-lab/fastify-multer';
import { FRequest } from 'fastify';
import { FieldValue } from '@google-cloud/firestore';
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

import { LocationService } from './location.service';

import type { TLocation, TLocationEntity } from '@types';

@ApiTags('location')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

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
    const doc = await this.locationService.getLocationById(id);

    const newLocation = { ...doc, id: doc.id };

    delete newLocation.image?.exif;
    delete newLocation.embedding_field;

    const images = await this.locationService.getImages(doc.image.url);

    const nearest = await this.locationService.getNearestLocations(doc.geohash);

    return { ...newLocation, nearest: nearest ?? [], images };
  }

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

    // Save to db
    const newLocation: TLocationEntity = {
      uid: req.user.uid,
      embedding_field: FieldValue.vector(embeddings[0]),
      geohash: geohash,
      location: locationData,
      keywords: description.keywords,
      title: description.location?.name ?? '',
      userDescription: '',
      description: description.description,
      image: {
        ...description,
        exif: JSON.stringify(exif),
        url: newFilename,
      },
    };

    const doc = await this.locationService.saveLocationToDB(newLocation);

    newLocation.id = doc.id;

    delete newLocation.image?.exif;
    delete newLocation.embedding_field;

    const images = await this.locationService.getImages(newFilename);

    return { ...newLocation, images };
  }

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
    const doc = await this.locationService.updateLocationInDB(data);

    const images = await this.locationService.getImages(doc.image.url);

    return { ...doc, images };
  }

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
    // Remove from db
    const doc = await this.locationService.removeLocationFromDB(id);

    // Remove from CDN
    await this.locationService.removeFromCDN(doc.image.url);

    return { id: doc.id };
  }
}
