import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LocationModule } from '@back/app/location/location.module';
import { LocationsModule } from '@back/app/locations/locations.module';
import { ProfileModule } from '@back/app/profile/profile.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    LocationModule,
    LocationsModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
