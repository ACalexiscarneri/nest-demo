import { Controller, FileTypeValidator, Get, HttpStatus, MaxFileSizeValidator, Param, ParseFilePipe, ParseUUIDPipe, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { AuthGuard } from "src/guards/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("products")
@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async getProducts() {
        return this.productsService.getProduct();
    }

    @Get(":id")
    getProductById(@Param("id" , new ParseUUIDPipe()) id:string){
      
    return this.productsService.getProductById(id)

    }

    @Post("/uploadImage/:id")
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor("image"))
    updateProductImage(@Param("id") id:string, @UploadedFile(
        new ParseFilePipe({
            validators: [
                 new MaxFileSizeValidator({
                    maxSize: 200 * 1024,
                    message: "el archivo debe ser menor a 200kb"
                 }),
                 new FileTypeValidator({
                    fileType:/(jpg| jpeg| png| webp)$/

                 })
            ]
        })
    ) file:Express.Multer.File,){
      return this.productsService.updateImageService(id,file)
    }

    
}