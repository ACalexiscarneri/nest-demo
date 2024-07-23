import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./user.service";
import IUser from "src/interfeces/IUser";
import { AuthGuard } from "src/guards/auth.guard";



@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard)
    @HttpCode(200)
    getUsers(@Query("page") page:number = 1,
       @Query("limit") limit:number = 5) {
       return this.usersService.getUsers({page,limit});
       
    }

    @Post()
    @HttpCode(201)
    createUsers(@Body() user:IUser){
        return this.usersService.createUsers(user);
    }

    @Get(":id")
    @HttpCode(200)
    getUsersById(@Param("id") id:string){
        const user = this.usersService.getUsersById(Number(id))
        return user;

    }

    @Put(":id")
    @HttpCode(200)
    updateUsers(@Param("id") id:number){
       return this.usersService.updateUser(Number(id))
    }

    @Delete(":id")
    @HttpCode(200)
    daleteUser(@Param("id") id:number){
      return this.usersService.deleteUser(Number(id))
    }


}