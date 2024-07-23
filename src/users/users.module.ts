import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./user.service";
import { UsersRepository } from "./users.repository";



@Module({
    imports:[],
    controllers: [UsersController],
    providers:[UsersService,UsersRepository],
})
export class UsersModule {}