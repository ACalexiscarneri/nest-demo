import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { OrderDetailsModule } from 'src/order-details/order-details.module';
import { OrderDetails } from 'src/order-details/entities/orderDetail.entity';
import { Product } from 'src/products/entities/product.entity';





@Module({
  imports:[TypeOrmModule.forFeature([Order,OrderDetails,Product]),UsersModule,ProductsModule,OrderDetailsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
