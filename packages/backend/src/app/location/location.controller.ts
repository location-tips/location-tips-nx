import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, File as FastifyFile } from '@nest-lab/fastify-multer';


import { LocationService } from './location.service';
import type { TLocationEntity } from '@types';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
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
    // Save to db

    const newLocation: TLocationEntity = {
      location: {
        coordinates: {
          latitude: exif.gps?.Latitude ?? description.location?.coordinates?.latitude ?? 0,
          longitude: exif.gps?.Longitude ?? description.location?.coordinates?.longitude ?? 0,
        },
        name: description.location?.name,
        type: description.location?.type,
      },
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

    // Save to vector db
    await this.locationService.saveLocationToVectorDB(newLocation);

    return { exif, description, newFilename };
  }

  @Get()
  getLocation() {
    return 'Hello World!';
  }
}
