import { Module } from '@nestjs/common';

import { FastifyMulterModule } from '@nest-lab/fastify-multer';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { LocationsSetModule } from './set/locationsSet.module';
import { LocationsSetsModule } from './sets/locationsSets.module';
import { FavouritesModule } from './favourites/favourites.module';
import { MyModule } from '@back/app/locations/my/my.module';

@Module({
  imports: [
    FastifyMulterModule,
    LocationsSetModule,
    LocationsSetsModule,
    FavouritesModule,
    MyModule
  ],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}
