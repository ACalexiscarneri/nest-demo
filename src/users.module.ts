import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./user.service";
import { LoggerMiddleware } from "./middleware/logger";


@Module({
    imports:[],
    controllers: [UsersController],
    providers:[UsersService],
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes("users")
    }
}