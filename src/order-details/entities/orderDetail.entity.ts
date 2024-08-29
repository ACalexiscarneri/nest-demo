import { Order } from "../../orders/entities/order.entity";
import { Product } from "../../products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "ordersdetails"
})

export class OrderDetails{
    @PrimaryGeneratedColumn("uuid")
     id: string
     
    @Column({
        type:"decimal",
        precision:10,
        scale:2,
        nullable:false
    })
     price:number

     @ManyToMany(() => Product, (product) => product.orderDetails)
     product:Product

     @OneToOne(() => Order, (order) => order.orderDetail)
     @JoinColumn()
     order: Order

     
}

