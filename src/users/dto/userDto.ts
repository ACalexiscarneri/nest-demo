import { Exclude } from "class-transformer";
import { IsUUID } from "class-validator";


export class userDto {
    @IsUUID()
    id:string

    name: string;
    email: string;
    address: string;
    phone: number;
    country: string;
    city: string;
  
    @Exclude()
    password: string;
    @Exclude()
    isAdmin: boolean;


}