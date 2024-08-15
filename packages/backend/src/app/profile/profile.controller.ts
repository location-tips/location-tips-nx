import {
  Body,
  Controller,
  Delete,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FileInterceptor, File as FastifyFile } from '@nest-lab/fastify-multer';
import { FRequest } from 'fastify';

import { ProfileService } from './profile.service';
import type { TProfile } from '@types';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  PostProfileRequestDTO,
  PostProfileResponseDTO,
  PutProfileRequestDTO,
  PutProfileResponseDTO,
  DeleteProfileRequestDTO,
  DeleteProfileResponseDTO,
} from '@back/dto';

import { AuthGuard } from '@back/app/guards/auth.guard';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @ApiOperation({ summary: 'Create new profile' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: PostProfileResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({
    description: 'Profile data.',
    type: PostProfileRequestDTO,
  })
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async postProfile(
    @UploadedFile() image: FastifyFile,
    @Request() req: FRequest,
  ) {
    // Save to db
    const newProfile: TProfile = {
      uid: req.user.uid,
    };

    await this.profileService.saveProfileToDB(newProfile);

    return newProfile;
  }

  @Put()
  @ApiOperation({ summary: 'Update profile' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully updated.',
    type: PutProfileResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @UseGuards(AuthGuard)
  @ApiBody({
    description: 'Custom data for profile.',
    type: PutProfileRequestDTO,
  })
  async putProfile(@Body() data: PutProfileRequestDTO) {
    const doc = await this.profileService.updateProfileInDB(data);

    return doc;
  }

  @Delete()
  @ApiOperation({ summary: 'Remove profile' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully deleted.',
    type: DeleteProfileResponseDTO,
  })
  @ApiResponse({ status: 400, description: 'Empty request.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 500, description: 'Server error.' })
  @UseGuards(AuthGuard)
  @ApiBody({
    description: 'Remove profile.',
    type: DeleteProfileRequestDTO,
  })
  async deleteProfile(@Body() { uid }: DeleteProfileRequestDTO) {
    // Remove from db
    await this.profileService.removeProfileFromDB(uid);

    return { uid };
  }
}
