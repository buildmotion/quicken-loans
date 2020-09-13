/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createApiDoc(app);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

/**
 * Use to create swagger documentation for the API endpoints. The
 * API controller methods require [@nestjs/swagger] decorators.
 *
 * @param app The target NestJS application.
 */
function createApiDoc(app: INestApplication) {
  const docOptions = new DocumentBuilder()
    .setTitle('Quicken Contacts: API')
    .setDescription('API documentation for the Quicken Contacts code challenge application.')
    .setVersion('1.0.42')
    .addTag('Quicken')
    .build();

  const document = SwaggerModule.createDocument(app, docOptions);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
