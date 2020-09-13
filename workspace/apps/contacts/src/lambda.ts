import { Context, Handler } from 'aws-lambda';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import { Server } from 'http';

import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AppModule } from './app/app.module';
import { INestApplication, Options } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const express = require('express');

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this
// is likely due to a compressed response (e.g. gzip) which has not
// been handled correctly by aws-serverless-express and/or API
// Gateway. Add the necessary MIME types to binaryMimeTypes below
const binaryMimeTypes: string[] = [];

let cachedServer: Server;

// Create the Nest.js server and convert it into an Express.js server
async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), { cors: true });
    nestApp.enableCors({
      origin: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
    nestApp.use(eventContext());
    createApiDoc(nestApp);
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
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

// Export the handler : the entry point of the Lambda function
export const main: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
