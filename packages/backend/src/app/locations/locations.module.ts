import { Module } from '@nestjs/common';

import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

@Module({
  imports: [FastifyMulterModule],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
