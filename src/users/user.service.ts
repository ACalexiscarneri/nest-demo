import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.Dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { plainToClass } from "class-transformer";
import { userDto } from "./dto/userDto";




@Injectable()
export class UsersService {
   
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}
    
    getUsers({page,limit}:{page:number,limit:number}){
        return this.usersRepository.find();
        
    }
    async getUsersById(id:string){
        const user = await this.usersRepository.findOne({where:{id}})
        return plainToClass(userDto,user);
     }

     async createUsers(user:CreateUserDto){
        
         const newUser = this.usersRepository.create(user)
        await this.usersRepository.save(newUser)
        return plainToClass(userDto,newUser);
        
    }

    async findByEmail(email:string){
      const user = await this.usersRepository.findOne({where:{email}});
      return user
    }


    /*updateUser(id:number){
       return this.usersRepository.updateUser(id)
    }

    deleteUser(id:number){
        return this.usersRepository.deleteUser(id)
    }*/

}

    
