import { Injectable } from "@nestjs/common";
import IProduct from "src/interfeces/IProduct";

@Injectable()
export class ProductsRepository {
    private products:IProduct[] = [ {
        id: 1,
        name: "Laptop",
        description: "Una laptop de alta gama",
        price: 1200.00,
        stock: true,
        imgUrl: "ejemplo1.jpg"
    },{  
    id: 2,
    name: "Smartphone",
    description: "Un smartphone con excelente cámara y batería duradera",
    price: 800.00,
    stock: true,
    imgUrl:"ejemplo2.jpg"
}]
getProducts():IProduct[] {
    return this.products;
}

getProductById(id:number){
  const product = this.products.find(product => product.id === id)
  const nameProduct = product.name;
  return nameProduct;
}

}