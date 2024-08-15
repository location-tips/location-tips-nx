import { Module } from '@nestjs/common';

import { LocationsSetsController } from './locationsSets.controller';
import { LocationsSetsService } from './locationsSets.service';

@Module({
  imports: [],
  controllers: [LocationsSetsController],
  providers: [LocationsSetsService],
})
export class LocationsSetsModule {}
