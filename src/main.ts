import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import loggerGlobal from './middleware/logger';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))
  app.use(loggerGlobal);
  const swaggerConfig =  new DocumentBuilder()
  .setTitle("Demo nestjs")
  .setDescription("Esta es una api construida con nestjs")
  .setVersion("0.0.1")
  .addBasicAuth()
  .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api",app,document);

  await app.listen(3000);
}
bootstrap();
