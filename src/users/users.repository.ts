import { Injectable } from "@nestjs/common";
import IUser from "src/interfeces/IUser";
import { CreateUserDto } from "./dto/create-user.Dto";
import { userDto } from "./dto/userDto"
import { plainToClass } from "class-transformer";



@Injectable()
export class UsersRepository {
    private users:IUser[] = [{
        id:1,
        email:"acarneri20@gmail.com" ,      
        name:"alexis",
        password:"1234",
        address:"San Martin 3456",
        phone:"112345543",
        country:"Argentina",
        city:"rosario"
    },
    {
        id:2,
        email:"pedri1@gmail.com",
        name:"pedro",
        password:"1234",
        address:"San Martin 3456",
        phone:"112345543",
        country:"Argentina",
        city:"rosario"
    }
    ];
    getUsers({page,limit}:{page:number,limit:number}){
        return  this.users.map(user => plainToClass(userDto,user));
        
    }

    getUsersById(id:number){
       const user = this.users.find(user => user.id === id)
       return plainToClass(userDto,user);
    }

     

    findByEmail(email:string){
     return this.users.find(user => user.email === email);
    }

    updateUser(id:number){
       const user = this.users.find(user => user.id === id)
       
    }

    deleteUser(id:number){
       this.users.filter(user => user.id !== id)
       return id;
    }
}