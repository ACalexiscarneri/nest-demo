import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/categories/entities/category.entity";
import { In, Repository } from "typeorm";
import categories from "./categories-mock";



@Injectable()
export class CategoriesSeed  {
    constructor(@InjectRepository(Category) private readonly categoryRepositorio:Repository<Category>){}



async addCategories(){

    const existCategory = await this.categoryRepositorio.find({where: {name: In(categories)}})

    for(const categoryName of categories){
        if(!existCategory.some((category) => category.name === categoryName)){
        }
        const category = new Category();
        category.name = categoryName;
        await this.categoryRepositorio.save(category);
    }
  }
}