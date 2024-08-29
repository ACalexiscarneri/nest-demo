import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsEmail, IsInt, IsNotEmpty, IsString, Length, Matches,  } from "class-validator";

export class CreateUserDto {
    
    @IsString({message:"debe ser una cadena de texto"})
    @IsNotEmpty({message:"el nombre no puede estar vacio"})
    @Length(3,80 ,{message:"el nombre debe tener entre 3 y 80 caracteres"})
    @ApiProperty({
        description:"el nombre debe tener al menos 3 caracateres",
        example:"alexis"
    })
    readonly name: string;
  
    @ApiProperty({
        description:"el email debe ser valido",
        example:"AlexisC20@gmail.com"
    })
    @IsEmail({},{message:"el email debe tener una estructura valida"})
    @IsNotEmpty({message:"el email no puede estar vacio"})
    readonly email: string;
  
    @ApiProperty({
        example:"A123dfgh4@"
    })
    @IsString()
    @IsNotEmpty({message:"la contrasena no puede estar vacio"})
    //@Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]$/,{message:"La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*"})
    @Length(8,15 ,{message: "la contrasena debe tener entre 8 y 15 caracteres"})
    readonly password: string;

 
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    readonly confirmPassword:string;
  
    @ApiProperty()
    @IsString()
    @Length(3,80 ,{message:"la direccion debe tener entre 3 y 80 caracteres"})
    readonly address: string;


    @ApiProperty()
    @IsNotEmpty({message:"el numero de telefono no puede estar vacio"})
    @IsInt()
    readonly phone: number;
  
    @ApiProperty()
    @IsString()
    @Length(5,20 ,{message:"el pais de tener entre 5 y 20 caracteres"})
    readonly country?: string;
  
    @ApiProperty()
    @IsString()
    @Length(5,20 ,{message:"la ciudad debe tener entre 5 y 20 caracteres"})
    readonly city?: string;

   constructor(partial:Partial<CreateUserDto>){
    Object.assign(this, partial)
   }


  }

