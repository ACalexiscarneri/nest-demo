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
        
        async buyProduct(id:string):Promise<number>{
          const product =  await this.productRepository.findOne({where:{id}})
          
          
          if(product.stock === 0) {
            throw new NotFoundException('out of stock product');
          }
          await this.productRepository.update(id,{stock:product.stock - 1})
          return product.price;
        }

    async addProducts() {

      const category1 = new Category();
      category1.name = "smartphone"

      const existCategory = await this.categoryRepository.findOne({where: {name:category1.name}})
      if(!existCategory){
        await this.categoryRepository.save(category1);
      }
      
      
      const products = {
          "name": "Iphone 15",
          "description": "The best smartphone in the world",
          "price": 199.99,
          "stock": 12,
          "category": "smartphone"
        }
        const product = new Product();
        product.name = products.name;
        product.description = products.description;
        product.price = products.price;
        product.stock = products.stock;
        product.category = category1;
        
        const existProduct = await this.productRepository.findOne({where: {name:product.name}})
        if(!existProduct){
          await this.productRepository.save(product);
        }


        const products1 =  {
          "name": "Samsung Galaxy S23",
          "description": "The best smartphone in the world",
          "price": 150.0,
          "stock": 12,
          "category": "smartphone"
        }
        const product1 = new Product();
        product1.name = products1.name
        product1.description = products1.description
        product1.price = products1.price
        product1.stock = products1.stock
        product1.category = category1

        const existProduct1 = await this.productRepository.findOne({where: {name:product1.name}})
        if(!existProduct1){
          await this.productRepository.save(product1);
        }
       
        const products2 = {
          "name": "Motorola Edge 40",
          "description": "The best smartphone in the world",
          "price": 179.89,
          "stock": 12,
          "category": "smartphone"
        }

        const product2 = new Product()
        product2.name = products2.name
        product2.description = products2.description
        product2.price = products2.price
        product2.stock = products2.stock
        product2.category = category1


        const existProduct2 = await this.productRepository.findOne({where: {name:product2.name}})
        if(!existProduct2){
          await this.productRepository.save(product2);
        }

      }
        
    }

