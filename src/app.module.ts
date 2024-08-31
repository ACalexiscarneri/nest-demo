import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import  typeormconfig from "./config/typeorm"
import { CategoryModule } from './categories/category.module';
import { OrdersModule } from './orders/orders.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './config/envs';
import { SeedsModule } from './seeds/seeds.module';
import { ProductsSeed } from './seeds/products/products.seed';
import { CategoriesSeed } from './seeds/categories/categories.seed';

@Module({
  imports: [ConfigModule.forRoot({
     isGlobal:true,
     load:[typeormconfig]
  }),
    TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => 
    configService.get("typeorm")
  }),
    UsersModule,ProductsModule,AuthModule,CategoryModule,OrdersModule, OrderDetailsModule, CloudinaryModule,
    JwtModule.register({
      global:true,
      signOptions: {expiresIn:"1h"},
      secret: JWT_SECRET
    }),
    SeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

