import { Module } from '@nestjs/common';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

import { LocationController } from './location.controller';
import { LocationService } from './location.service';

@Module({
  imports: [FastifyMulterModule],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
