import { Body, Controller, HttpCode, Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login.Dto";
import { CreateUserDto } from "src/users/dto/create-user.Dto";




@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService){}
   
    @Post("login")
    login(@Body() creds:LoginUserDto){
        return this.authService.login(creds);
    }

    @Post("register")
    @HttpCode(201)
    createUsers(@Body() user:CreateUserDto){
        return this.authService.register(user);
    }
}