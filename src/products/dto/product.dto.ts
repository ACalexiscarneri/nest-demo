import { IsNumber, IsPositive, IsString } from "class-validator"

export class createProductDto {
    @IsString()
    name:string

    @IsString()
    description:string

    @IsNumber()
    @IsPositive()
    price:number
    
    @IsNumber()
    stock:number

    @IsString()
    category:string
}