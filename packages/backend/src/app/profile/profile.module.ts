import { Module } from '@nestjs/common';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [FastifyMulterModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
