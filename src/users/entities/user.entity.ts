import { Order } from "../../orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity({
    name:"users"
})
export class User {

  @PrimaryGeneratedColumn("uuid")
  id:string = uuid()

 @Column({
    length:50,
    nullable:false
 })
   name:string;

 @Column({
    length:50,
    unique:true,
    nullable:false
 })
  email:string;

  @Column({
    length:80,
    nullable:false
  })
  password:string;

  @Column({
    type:"bigint"
  })
  phone:number;

  @Column({
    length:50
  })
  country:string;

  @Column({
    type:"text"
  })
  address:string;

  @Column({
    length:50
  })
  city:string

  @Column({
    default:false
  })
  isAdmin:boolean;

  @OneToMany(() => Order, (order) => order.user)
  order: Order[]
  


}