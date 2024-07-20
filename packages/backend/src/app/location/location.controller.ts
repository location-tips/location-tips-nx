import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, File as FastifyFile } from '@nest-lab/fastify-multer';

import { FieldValue } from '@google-cloud/firestore';

import { LocationService } from './location.service';
import type { TLocation, TLocationEntity } from '@types';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostLocationRequestDTO, PostLocationResponseDTO } from '@back/dto/postLocation.dto';

import { geohashForLocation } from 'geofire-common';
import { getEmbeddings } from '@back/utils/vertex';

@ApiTags('location')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ApiOperation({ summary: 'Create new location' })
  @ApiBearerAuth()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: PostLocationResponseDTO })
  @ApiResponse({ status: 400, description: 'Empty request.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 500, description: 'Server error.'})
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Image file of location.',
    type: PostLocationRequestDTO,
  })
  @UseInterceptors(FileInterceptor('image'))
  async postLocation(@UploadedFile() image: FastifyFile) {
    // Extract exif
    const exif = await this.locationService.extractExif(image.buffer);
    // Convert to webp
    const imageFileBlob = new Blob([image.buffer], { type: image.mimetype });
    const imageFile = new File([imageFileBlob], image.originalname, { type: image.mimetype });
    const webp = await this.locationService.convertToWebp(imageFile);
    // Get description
    const description = await this.locationService.getImageDescription(webp, exif);
    // Save to CDN
    const newFilename = await this.locationService.uploadToCDN(webp);

    const locationData: TLocation = {
      coordinates: {
        latitude: exif.gps?.Latitude ?? description.location?.coordinates?.latitude ?? 0,
        longitude: exif.gps?.Longitude ?? description.location?.coordinates?.longitude ?? 0,
      },
      name: description.location?.name,
      type: description.location?.type,
      description: description.location.description,
    };
    
    const geohash = geohashForLocation([locationData.coordinates.latitude, locationData.coordinates.longitude]);

    const embeddings= await getEmbeddings(locationData.description + ' ' + description.keywords.join(' ') + ' ' + locationData.name + ' ' + locationData.type + ' ' + locationData.description);

    // Save to db
    const newLocation: TLocationEntity = {
      embedding_field: FieldValue.vector(embeddings[0]),
      geohash: geohash,
      location: locationData,
      keywords: description.keywords,
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

    return { description };
  }

}
