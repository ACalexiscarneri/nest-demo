import { Exclude } from "class-transformer";


export class userDto {
    id:number
    name: string;
    email: string;
    address: string;
    phone: string;
    country: string;
    city: string;
  
    @Exclude()
    password: string;


}