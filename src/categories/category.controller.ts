import { Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("categories")
@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

@Get()
async getCategories(){
   return this.categoryService.getCategories();
}


}