import { Module } from '@nestjs/common';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

import { LocationsSetController } from './locationsSet.controller';
import { LocationsSetService } from './locationsSet.service';

@Module({
  imports: [FastifyMulterModule],
  controllers: [LocationsSetController],
  providers: [LocationsSetService],
})
export class LocationsSetModule {}
