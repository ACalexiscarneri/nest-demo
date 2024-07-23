import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/user.service";
import ILogin from "./login.Dto";


@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService){}


    login(creds:ILogin){
      const {email , password} = creds;
      if (!email || !password) {
        return 'Credenciales incompletas.';
      }

      const user = this.userService.findByEmail(email)
      if(!user){
        return "Email o password incorrectos";
      }
      if(user.password !== password){
        return "Email o password incorrectos"
      }
      return user;
    }
}