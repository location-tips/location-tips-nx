import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from 'packages/backend/src/app/location/location.module';
import { LocationsModule } from 'packages/backend/src/app/locations/locations.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), LocationModule, LocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
