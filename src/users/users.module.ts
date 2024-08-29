import { Module} from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { AuthService } from "src/auth/auth.service";
import { AuthModule } from "src/auth/auth.module";



@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers:[UsersService,AuthService],
    exports:[UsersService]
})
export class UsersModule {}