import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { OrdersModule } from '../orders/orders.module';

@Module({
    imports:[TypeOrmModule.forFeature([Category]), OrdersModule],
    controllers:[CategoryController],
    providers: [CategoryService],
})
export class CategoryModule {}