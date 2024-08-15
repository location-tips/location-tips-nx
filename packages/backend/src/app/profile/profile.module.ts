import { Module } from '@nestjs/common';

import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { FastifyMulterModule } from '@nest-lab/fastify-multer';

@Module({
  imports: [FastifyMulterModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
