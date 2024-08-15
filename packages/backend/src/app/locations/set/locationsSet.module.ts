import { Module } from '@nestjs/common';

import { LocationsSetController } from './locationsSet.controller';
import { LocationsSetService } from './locationsSet.service';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

@Module({
  imports: [FastifyMulterModule],
  controllers: [LocationsSetController],
  providers: [LocationsSetService]
})
export class LocationsSetModule {}
