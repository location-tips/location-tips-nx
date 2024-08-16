import { Module } from '@nestjs/common';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

import { LocationsService } from '@back/app/locations/locations.service';

import { MyController } from './my.controller';
import { MyService } from './my.service';

@Module({
  imports: [FastifyMulterModule],
  controllers: [MyController],
  providers: [MyService, LocationsService],
})
export class MyModule {}
