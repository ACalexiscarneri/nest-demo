import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';

@Controller('files')
export class CloudinaryController {
    constructor(private readonly cloudinaryService :CloudinaryService){}

    @Post("/uploadImage")
    @UseInterceptors(FileInterceptor("image"))
    uploadProductImage(@UploadedFile() file:Express.Multer.File){
        return this.cloudinaryService.uploadImage(file)

    }
}
