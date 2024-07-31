/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import { configureFirebase } from 'packages/backend/src/utils/configureFirebase';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

configureFirebase();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: { level: 'debug' }, bodyLimit: 20048576 }));
  const globalPrefix = 'api';

  const config = new DocumentBuilder()
  .setTitle('Location tips API')
  .setDescription('Location.tips API')
  .setVersion('1.0')
  .addTag('locations')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
