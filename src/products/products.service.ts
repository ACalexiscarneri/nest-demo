import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { Category } from "src/categories/entities/category.entity";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>,
        @InjectRepository(Category) private categoryRepository: Repository<Category>,
        private readonly cloudinaryService:CloudinaryService
      ){}
        
        
        async getProduct(): Promise<Product[]>{
              return this.productRepository.find();
        }

        async getProductById(id:string){
          const product =  await this.productRepository.findOneBy({id})
          return product;
        }

        async updateImageService(id:string , file: Express.Multer.File){
          const product = await this.getProductById(id)
          const uploadImage = await this.cloudinaryService.uploadImage(file)
          product.imgUrl = uploadImage.secure_url;
          return this.productRepository.save(product)
          
        }
        
        async deleteProduct(id:string){
           await this.productRepository.delete(id)
           return "producto eliminado"
        }

        
    }

