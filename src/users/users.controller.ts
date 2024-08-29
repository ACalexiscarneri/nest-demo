import { Body, Controller, Get, HttpCode, Param, ParseUUIDPipe, Post, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./user.service";
import { AuthGuard } from "src/guards/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "src/guards/roles.guard";

@ApiTags("users")
@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @ApiBearerAuth()
    @UseGuards(AuthGuard, RolesGuard)
    @HttpCode(200)
    getUsers(@Query("page") page:number = 1,
       @Query("limit") limit:number = 5) {
       return this.usersService.getUsers({page,limit});
       
    }


    @Get(":id")
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @HttpCode(200)
    getUsersById(@Param("id", new ParseUUIDPipe()) id:string){
        const user = this.usersService.getUsersById(id)
        return user;

    }

    @Get()
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    findByEmail(@Body() email:string){
      return this.usersService.findByEmail(email)
    }

    /*@Put(":id")
    @HttpCode(200)
    updateUsers(@Param("id") id:number){
       return this.usersService.updateUser(Number(id))
    }*/

    /*@Delete(":id")
    @HttpCode(200)
    daleteUser(@Param("id") id:number){
      return this.usersService.deleteUser(Number(id))
    }*/


}