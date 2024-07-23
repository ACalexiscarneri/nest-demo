import { Body, Controller, Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
import ILogin from "./login.Dto";



@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService){}
   
    @Post("signin")
    login(@Body() creds:ILogin){
        return this.authService.login(creds)
    }
}