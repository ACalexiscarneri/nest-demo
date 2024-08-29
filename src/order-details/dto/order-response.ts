import { IsString, IsUUID } from "class-validator";

export class orderResponseDto {
    @IsUUID()
    @IsString()
    detailId: string

    
    price:number;

}