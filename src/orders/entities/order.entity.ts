import { OrderDetails } from "../../order-details/entities/orderDetail.entity";
import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "orders"
})

export class Order {
    @PrimaryGeneratedColumn("uuid")
     id:string

     @Column()
     date:Date;

     @ManyToOne(() => User, (user) => user.order)
     user:User

     @OneToOne(() => OrderDetails, (orderDetail) => orderDetail.order)
     orderDetail: OrderDetails
}