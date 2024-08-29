import { Module } from '@nestjs/common';
import { CloudinaryController } from './cloudinary.controller';
import { CloudinaryService } from './cloudinary.service';
import { cloudinaryConfig } from 'src/config/cloudinary';


@Module({
  
  controllers: [CloudinaryController],
  providers: [CloudinaryService,cloudinaryConfig,CloudinaryService]
})
export class CloudinaryModule {}
