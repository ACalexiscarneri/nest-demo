import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/categories/entities/category.entity";
import { Product } from "src/products/entities/product.entity";
import { Repository } from "typeorm";
import products from "./products-mock";



@Injectable()
export class ProductsSeed {

  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>,
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>){}

 
    async findCategoryByName(categoryName:string):Promise<Category>{

        const foundCategory = await this.categoryRepository.findOne(
            {where: {name: categoryName}});

            if(!foundCategory){
                throw new Error(`category ${categoryName} not found`);
            }
            return foundCategory;

    }

    async addProducts(){
        const existProductName = (await this.productRepository.find()).map((product) => product.name) 

        for(const productData of products){
            if(!existProductName.includes(productData.name)){
                const product = new Product();
                product.name = productData.name;
                product.description = productData.description;
                product.price = productData.price;
                product.stock = productData.stock;
                product.category = await this.findCategoryByName(productData.category);
                await this.productRepository.save(product);
            }
        }
    }



}