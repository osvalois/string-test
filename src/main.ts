// src/main.ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Strip Comments API')
    .setDescription('API para eliminar comentarios de un texto')
    .setVersion('1.0')
    .addTag('strip-comments')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Configuración de ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();