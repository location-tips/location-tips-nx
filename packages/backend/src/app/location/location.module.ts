import { Module } from '@nestjs/common';

import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

@Module({
  imports: [FastifyMulterModule],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
