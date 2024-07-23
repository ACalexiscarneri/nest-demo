import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/user.service";
import { UsersRepository } from "src/users/users.repository";

@Module({
    imports:[],
    controllers:[AuthController],
    providers:[AuthService,UsersService,UsersRepository]
})
export class AuthModule {}