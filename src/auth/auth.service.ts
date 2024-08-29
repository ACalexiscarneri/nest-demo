import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/user.service";
import { LoginUserDto } from "./dto/login.Dto";
import * as bcrypt from "bcrypt"
import { CreateUserDto } from "src/users/dto/create-user.Dto";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { plainToClass, plainToInstance } from "class-transformer";
import { userDto } from "src/users/dto/userDto";
import { Role } from "./roles.enum";



@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService,
      private readonly jwtService: JwtService,
      @InjectRepository(User) private userRepository: Repository<User>
    ){}


    async login(creds:LoginUserDto){
      const {email , password} = creds;
      if (!email || !password) {
        throw new NotFoundException("Email o password incorrectos")
      }

      const user = await this.userService.findByEmail(email)
      if(!user){
        return "Email o password incorrectos";
      }
      const passwordValid = await bcrypt.compare(password , user.password)
      if(!passwordValid){
        throw new NotFoundException("Email o password incorrectos")
      }
      const payload = {
        sub: user.id ,
        id:user.id, 
        name:user.name,
        roles: [user.isAdmin ? Role.admin : Role.user]}

      const token = this.jwtService.sign(payload)

      return { message: 'Login successful', token};
    }


    async register(creds:CreateUserDto){
      console.log(creds);
      const user = await this.userService.findByEmail(creds.email)
      if(user){
        throw new BadRequestException("el usuario ya existe")
      }
      if(creds.password !== creds.confirmPassword){
        throw new BadRequestException("las contraseñas no coinciden")
      }
      if (!creds.password) {
        throw new BadRequestException("La contraseña es requerida");
      }
      const hashedPassword = await bcrypt.hash(creds.password, 10);
     
      return this.userService.createUsers({...creds, password:hashedPassword});
      
    }
}