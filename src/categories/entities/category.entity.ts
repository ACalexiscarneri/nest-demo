import { Product } from "../../products/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity({
    name:"categories"
})

export class Category {
    
    @PrimaryGeneratedColumn("uuid")
    id: string 
 

    @Column({
        nullable:false,
        length:50
    })
    name:string

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];

    
}