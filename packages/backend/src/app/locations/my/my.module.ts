import { Module } from '@nestjs/common';

import { MyController } from './my.controller';
import { MyService } from './my.service';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';
import { LocationsService } from '@back/app/locations/locations.service';

@Module({
  imports: [FastifyMulterModule],
  controllers: [MyController],
  providers: [MyService, LocationsService],
})
export class MyModule {}
