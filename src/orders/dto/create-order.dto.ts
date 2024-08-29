import { IsArray, IsString, IsUUID } from "class-validator";



export class CreateOrderDto {
    
    @IsUUID()
    @IsString()
    userId:string;

    @IsArray()
    products: {id: string}[];
}
