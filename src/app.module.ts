import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './Users.module';
import { ProductsModule } from './products.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [UsersModule,ProductsModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
