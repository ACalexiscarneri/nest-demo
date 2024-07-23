import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    readonly name: string;
  
    @IsEmail()
    readonly email: string;
  
    @IsString()
    @IsNotEmpty()
    readonly password: string;
  
    @IsString()
    readonly address: string;
  
    @IsString()
    readonly phone: string;
  
    @IsString()
    readonly country?: string;
  
    @IsString()
    readonly city?: string;
  }