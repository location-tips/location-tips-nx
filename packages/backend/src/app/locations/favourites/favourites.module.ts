import { Module } from '@nestjs/common';

import { FavouritesController } from './favourites.controller';
import { FavouritesService } from './favourites.service';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';
import { LocationsService } from '@back/app/locations/locations.service';

@Module({
  imports: [FastifyMulterModule],
  controllers: [FavouritesController],
  providers: [FavouritesService, LocationsService]
})
export class FavouritesModule {}
