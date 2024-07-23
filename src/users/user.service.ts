import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

import { CreateUserDto } from "./create-user.Dto";


@Injectable()
export class UsersService {
    constructor(private usersRepository:UsersRepository){

    }
    getUsers({page , limit}:{page:number,limit:number}){
        return this.usersRepository.getUsers({page , limit});
    }

    getUsersById(id:number){
       return this.usersRepository.getUsersById(id);
    }

    createUsers(user: CreateUserDto):number{
        return this.usersRepository.createUsers(user);
    }

    findByEmail(email:string){
       return this.usersRepository.findByEmail(email);
    }


    updateUser(id:number){
       return this.usersRepository.updateUser(id)
    }

    deleteUser(id:number){
        return this.usersRepository.deleteUser(id)
    }
}