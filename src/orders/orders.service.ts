import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto} from './dto/create-order.dto';
import { UsersService } from 'src/users/user.service';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository } from 'typeorm';
import { ProductsService } from 'src/products/products.service';
import { CreteOrderDetail } from 'src/order-details/dto/create-orderDetail';
import { orderResponseDto } from 'src/order-details/dto/order-response';
import { OrderDetails } from 'src/order-details/entities/orderDetail.entity';
import { Product } from 'src/products/entities/product.entity';




@Injectable()
export class OrdersService {
constructor(@InjectRepository(Order) private OrderRepository:Repository<Order>,
  private readonly userService:UsersService,
  private readonly productService:ProductsService,
  @InjectRepository(OrderDetails) private orderDetailRepository:Repository<OrderDetails>,
  @InjectRepository(Product) private productRepository:Repository<Product>
){}

  async addOrder(createOrderDto: CreateOrderDto) {
    const {userId, products} = createOrderDto
    const user = await this.userService.getUsersById(userId)
    if(!user){
      throw new NotFoundException("user not found");
    }

    
    const orderData = {
      user: user,
      date: new Date()
    }

    const order =  this.OrderRepository.create(orderData)
    await this.OrderRepository.save(order) 
    
    const todosLosProductos = [];
    let total = 0;
    
    for(const item of products){
      const product = await this.productService.getProductById(item.id)
      if(!product || product.stock <= 0){
        throw new NotFoundException(`Product with ID ${product} not found or out of stock`)
      }
       
      todosLosProductos.push(product)
      total = total + Number(product.price)

      product.stock -= 1;
      await this.productRepository.save(product)
    
    }

    const newOrderDetail = new CreteOrderDetail()
    newOrderDetail.order = order;
    newOrderDetail.price = total 
    newOrderDetail.products =todosLosProductos;

    const orderDetailEntity = await this.orderDetailRepository.create(newOrderDetail)
    await this.orderDetailRepository.save(newOrderDetail);
    
    
    const orderResponse = new orderResponseDto()
    orderResponse.detailId = orderDetailEntity.order.id
    orderResponse.price = newOrderDetail.price

    return orderResponse;

  }


  async getOrder(id: string): Promise<Order> {
    return this.OrderRepository.findOne({where:{id}});
  }

}
