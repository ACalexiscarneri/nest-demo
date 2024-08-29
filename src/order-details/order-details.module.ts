import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './entities/orderDetail.entity';
import { OrdersModule } from 'src/orders/orders.module';
import { ProductsService } from 'src/products/products.service';

@Module({
  imports:[TypeOrmModule.forFeature([OrderDetails])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
  exports:[OrderDetailsService]
})
export class OrderDetailsModule {}
