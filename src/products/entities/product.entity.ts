import { Category } from "../../categories/entities/category.entity";
import { OrderDetails } from "../../order-details/entities/orderDetail.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"products"
})

export class Product {

   @PrimaryGeneratedColumn("uuid")
     id:string

    @Column({
        length:50,
        nullable:false
    })
       name:string;

    @Column({
        type:"text",
        nullable:false
    })
     description:string

     @Column({
        type: "decimal",
        precision:10,
        scale:2,
        nullable:false
     })
     price:number;

     @Column({
        nullable:false
     })
     stock:number;

     @Column({
        default:"aca va una url por defecto"
     })

     imgUrl:string;

     @ManyToOne(() => Category, (category) => category.products)
     category: Category

     @ManyToMany(() => OrderDetails, (orderDetail) => orderDetail.product)
     @JoinTable()
     orderDetails: OrderDetails
       
}