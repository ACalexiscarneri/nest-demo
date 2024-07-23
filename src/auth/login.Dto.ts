import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ILogin {
    @IsEmail()
    email:string

    
    @IsNotEmpty()
    password:string
}

export default ILogin;