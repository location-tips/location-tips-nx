import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'nestjs-knex';

import { LocationModule } from '@back/app/location/location.module';
import { LocationsModule } from '@back/app/locations/locations.module';
import { ProfileModule } from '@back/app/profile/profile.module';
import { DBModule } from '@back/app/db/db.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const { DATABASE_URL } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot(),
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'pg',
          useNullAsDefault: true,
          connection: DATABASE_URL,
        },
      }),
    }),
    DBModule,
    LocationModule,
    LocationsModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
