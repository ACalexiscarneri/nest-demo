import { Module } from "@nestjs/common"
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";

import { Category } from "src/categories/entities/category.entity";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";

@Module({
    imports:[TypeOrmModule.forFeature([Product,Category]),CloudinaryModule],
    controllers:[ProductsController],
    providers:[ProductsService,CloudinaryService],
    exports:[ProductsService]
})
export class ProductsModule {}