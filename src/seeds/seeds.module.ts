import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductsSeed } from './products/products.seed';
import { CategoriesSeed } from './categories/categories.seed';

@Module({
    imports:[TypeOrmModule.forFeature([Category,Product])],
    providers:[ProductsSeed,CategoriesSeed],
    exports:[CategoriesSeed,ProductsSeed]
})
export class SeedsModule implements OnModuleInit{

    constructor(private readonly categoriesSeed:CategoriesSeed,
        private readonly productsSeed:ProductsSeed
    ){}

    async onModuleInit() {
        try{
            await this.categoriesSeed.addCategories();
            await this.productsSeed.addProducts();

        }catch{

            throw new Error('Method not implemented.');
        }
    }
}
