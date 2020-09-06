# Server Application Setup

## Tools

Install Nx Nest developer tools.

> More information at: https://nx.dev/angular/plugins/nest/overview. Make sure
> to use a version compatible with the Angular version you are targeting. For example,
> the Angular workspace is using Angular 9.x.x, therefore use a compatible version. See:
> [https://www.npmjs.com/package/@nrwl/nest](https://www.npmjs.com/package/@nrwl/nest)
> for a list of package versions.

> `npm install -D @nrwl/nest`

## Create Applications

Create a new server application using Nx. In our example below we are creating a `contacts` server application to manage contacts for the client SPA. By default it creates the server application in the `apps` folder - which makes sense. It is an application, it is deployable. I wanted to put the project in a `server` folder, however, the server is just where the application is hosted.

> Use the following command to create the server-side `contacts` application.
>
> ```
> nx generate @nrwl/nest:application contacts
> ```

The CLI output is as follows:

```ts
nx generate @nrwl/nest:application contacts
CREATE apps/contacts/tslint.json (91 bytes)
CREATE apps/contacts/tsconfig.app.json (178 bytes)
CREATE apps/contacts/tsconfig.json (182 bytes)
CREATE apps/contacts/src/main.ts (553 bytes)
CREATE apps/contacts/src/app/.gitkeep (0 bytes)
CREATE apps/contacts/src/assets/.gitkeep (0 bytes)
CREATE apps/contacts/src/environments/environment.prod.ts (52 bytes)
CREATE apps/contacts/src/environments/environment.ts (53 bytes)
CREATE apps/contacts/jest.config.js (129 bytes)
CREATE apps/contacts/tsconfig.spec.json (199 bytes)
CREATE apps/contacts/src/app/app.controller.spec.ts (627 bytes)
CREATE apps/contacts/src/app/app.controller.ts (265 bytes)
CREATE apps/contacts/src/app/app.module.ts (250 bytes)
CREATE apps/contacts/src/app/app.service.spec.ts (505 bytes)
CREATE apps/contacts/src/app/app.service.ts (175 bytes)
UPDATE package.json (3146 bytes)
UPDATE angular.json (17869 bytes)
UPDATE nx.json (862 bytes)
√ Packages installed successfully.
```

The _Workspace_ is updated with the following packages. An _application_ project is added to the _angular.json_ file.

```json
"@nestjs/common": "^7.0.0",
"@nestjs/core": "^7.0.0",
"@nestjs/platform-express": "^7.0.0",
"@nestjs/schematics": "^7.0.0",
"@nestjs/testing": "^7.0.0"
"@nrwl/nest": "^9.5.1",
"@nrwl/node": "9.5.1",
"reflect-metadata": "^0.1.13"
```

## Nest Application

The `main.ts` is the entry point and loader of the Nest application. It will _bootstrap_ the application using the `NestFactory.create()` method.

```ts
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  // use to create a Nest application instance; [create(..)] returns an application instance
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
```

The `create(..)` method returns an application object fulfilling the following _interface_ `INestApplication`.

```ts
import { CorsOptions } from './external/cors-options.interface';
import { CanActivate } from './features/can-activate.interface';
import { NestInterceptor } from './features/nest-interceptor.interface';
import { HttpServer } from './http/http-server.interface';
import { ExceptionFilter, INestMicroservice, NestHybridApplicationOptions, PipeTransform } from './index';
import { INestApplicationContext } from './nest-application-context.interface';
import { WebSocketAdapter } from './websockets/web-socket-adapter.interface';
/**
 * Interface defining the core NestApplication object.
 *
 * @publicApi
 */
export interface INestApplication extends INestApplicationContext {
  /**
   * A wrapper function around HTTP adapter method: `adapter.use()`.
   * Example `app.use(cors())`
   *
   * @returns {void}
   */
  use(...args: any[]): this;
  /**
   * Enables CORS (Cross-Origin Resource Sharing)
   *
   * @returns {void}
   */
  enableCors(options?: CorsOptions): void;
  /**
   * Starts the application.
   *
   * @param  {number} port
   * @param  {string} hostname
   * @param  {Function} callback Optional callback
   * @returns A Promise that, when resolved, is a reference to the underlying HttpServer.
   */
  listen(port: number | string, callback?: () => void): Promise<any>;
  listen(port: number | string, hostname: string, callback?: () => void): Promise<any>;
  /**
   * Returns the url the application is listening at, based on OS and IP version. Returns as an IP value either in IPv6 or IPv4
   *
   * @returns The IP where the server is listening
   */
  getUrl(): Promise<string>;
  /**
   * Starts the application (can be awaited).
   *
   * @param  {number} port
   * @param  {string} hostname (optional)
   * @returns {Promise}
   */
  listenAsync(port: number | string, hostname?: string): Promise<any>;
  /**
   * Registers a prefix for every HTTP route path.
   *
   * @param  {string} prefix The prefix for every HTTP route path (for example `/v1/api`)
   * @returns {void}
   */
  setGlobalPrefix(prefix: string): this;
  /**
   * Setup Ws Adapter which will be used inside Gateways.
   * Use when you want to override default `socket.io` library.
   *
   * @param  {WebSocketAdapter} adapter
   * @returns {void}
   */
  useWebSocketAdapter(adapter: WebSocketAdapter): this;
  /**
   * Connects microservice to the NestApplication instance. Transforms application
   * to a hybrid instance.
   *
   * @param  {T} options Microservice options object
   * @param  {NestHybridApplicationOptions} hybridOptions Hybrid options object
   * @returns {INestMicroservice}
   */
  connectMicroservice<T extends object = any>(options: T, hybridOptions?: NestHybridApplicationOptions): INestMicroservice;
  /**
   * Returns array of the microservices connected to the NestApplication.
   *
   * @returns {INestMicroservice[]}
   */
  getMicroservices(): INestMicroservice[];
  /**
   * Returns the underlying native HTTP server.
   *
   * @returns {any}
   */
  getHttpServer(): any;
  /**
   * Returns the underlying HTTP adapter.
   *
   * @returns {HttpServer}
   */
  getHttpAdapter(): HttpServer;
  /**
   * Starts all connected microservices asynchronously.
   *
   * @param  {Function} callback Optional callback function
   * @returns {void}
   */
  startAllMicroservices(callback?: () => void): this;
  /**
   * Starts all connected microservices and can be awaited.
   *
   * @returns {Promise}
   */
  startAllMicroservicesAsync(): Promise<void>;
  /**
   * Registers exception filters as global filters (will be used within
   * every HTTP route handler)
   *
   * @param  {ExceptionFilter[]} ...filters
   */
  useGlobalFilters(...filters: ExceptionFilter[]): this;
  /**
   * Registers pipes as global pipes (will be used within every HTTP route handler)
   *
   * @param  {PipeTransform[]} ...pipes
   */
  useGlobalPipes(...pipes: PipeTransform<any>[]): this;
  /**
   * Registers interceptors as global interceptors (will be used within
   * every HTTP route handler)
   *
   * @param  {NestInterceptor[]} ...interceptors
   */
  useGlobalInterceptors(...interceptors: NestInterceptor[]): this;
  /**
   * Registers guards as global guards (will be used within every HTTP route handler)
   *
   * @param  {CanActivate[]} ...guards
   */
  useGlobalGuards(...guards: CanActivate[]): this;
  /**
   * Terminates the application (including NestApplication, Gateways, and each connected
   * microservice)
   *
   * @returns {Promise<void>}
   */
  close(): Promise<void>;
}
```

## Build, Test, Serve Application

Build the application with configuration options (optional). By default, the serve command will run in watch mode. This allows code to be changed, and the Nest application to be rebuilt automatically. Nest applications also have the inspect flag set, so you can attach your debugger to the running instance.

```ts
nx build <nest-app> --configuration=production
```

Serve the application.

```
nx serve <nest-app> --port=<1234>
```

The output of the serve command.

```ts
ng serve contacts
Starting type checking service...
Using 6 workers with 2048MB memory limit
Type checking in progress...
Hash: 1f50371ef6fa884e85fd
Built at: 09/05/2020 1:04:14 PM
Entrypoint main = main.js main.js.map
chunk {main} main.js, main.js.map (main) 2.26 KiB [entry] [rendered]
Debugger listening on ws://localhost:52440/60c03caa-d750-4526-9040-d8e89f03d08b
Debugger listening on ws://localhost:52441/60c03caa-d750-4526-9040-d8e89f03d08b
For help, see: https://nodejs.org/en/docs/inspector
[Nest] 12364   - 09/05/2020, 1:04:20 PM   [NestFactory] Starting Nest application...
[Nest] 12364   - 09/05/2020, 1:04:20 PM   [InstanceLoader] AppModule dependencies initialized +45ms
[Nest] 12364   - 09/05/2020, 1:04:20 PM   [RoutesResolver] AppController {/api}: +119ms
[Nest] 12364   - 09/05/2020, 1:04:20 PM   [RouterExplorer] Mapped {/api, GET} route +20ms
[Nest] 12364   - 09/05/2020, 1:04:20 PM   [NestApplication] Nest application successfully started +8ms
[Nest] 12364   - 09/05/2020, 1:04:21 PM   Listening at http://localhost:3333/api +478ms
No type errors found
Version: typescript 3.7.5
Time: 9415ms
```

Load the URL in the browser: http://localhost:3333/api

The api output is:

```json
{ "message": "Welcome to contacts!" }
```

### HTTP

The HTTP API request uses the `Express` server to host and process requests.

```ts
Request URL: http://localhost:3333/api
Request Method: GET
Status Code: 304 Not Modified
Remote Address: [::1]:3333
Referrer Policy: no-referrer-when-downgrade
Content-Length: 31
Content-Type: application/json; charset=utf-8
Date: Sat, 15 Aug 2020 23:53:01 GMT
ETag: W/"1f-q36TEEewAbYKCWpxEMRYeqr977U"
X-Powered-By: Express
```

Other application commands.

```ts
nx lint <nest-app>
nx test <nest-app>
```

## Going Serverless

See [https://serverless.com](https://serverless.com) for more information about targeting
multiple platforms (i.e., Google Cloud Platform, AWS, or Azure) with a single YAML
configuration.

> - requires AWS Account
> - use Serverless package

Install _serverless_ package.

> `yarn global add serverless`

### Serverless Build Endpoint

Create a `lambda.ts` file in the _src_ folder of the target application. The example is an application that we want to host on AWS Lambda called `video`. The `serverless` build process will use this file to build the application.

```ts
ex: apps\video\src\lambda.ts
```

> **Pre-requisites**: You will need to install some additional packages. Since we
> are using TypeScript, install the type definition packages also.
>
> - [aws-serverless-express](https://www.npmjs.com/package/aws-serverless-express)
> - [aws-lambda](https://www.npmjs.com/package/aws-lambda)

```ts
yarn add --dev @types/aws-lambda
yarn add --dev @types/aws-serverless-express
yarn add --dev aws-lambda
yarn add --dev aws-serverless-express
yarn add --dev serverless-offline
yarn add --dev serverless-plugin-optimize
yarn add --dev serverless-plugin-typescript
```

## API Key and Secret Key

Create a new IAM user account in AWS. Copy or download the keys. Run the `serverless` command to create a credential store/file. On Windows, the credential file is stored in the `.aws/credential` location in your local `users/<NAME>` folder.

> Short video on creating a new IAM user and accessing keys.
> https://www.youtube.com/watch?v=KngM5bfpttA

Your development environment requires AWS credentials. Use the `serverless` CLI to create the file with the API and secret keys. The file supports multiple _profilea_. Therefore, you can have different IAM user accounts associated to different profiles.

The CLI has a `--help` to provide the information for a credentials file.

```ts
serverless config credentials --help
Plugin: AwsConfigCredentials
config credentials ............ Configures a new provider profile for the Serverless Framework
    --provider / -p (required) ......... Name of the provider. Supported providers: "aws"
    --key / -k (required) .............. Access key for the provider
    --secret / -s (required) ........... Secret key for the provider
    --profile / -n ..................... Name of the profile you wish to create. Defaults to "default"
    --overwrite / -o ................... Overwrite the existing profile configuration in the credentials file
```

Use the serverless CLI command to create the credentials file using the _api_ and _secret_ key values from the AWS IAM account.

```ts
serverless config credentials --provider aws --key <api-key> --secret <secret-key>
serverless config credentials --provider aws --profile <default|custom-name> --key <api-key> --secret <secret-key>
```

Use the `serverless deploy` command to use the `default` AWS profile. If you only have 1, then it is the default. An environment with multiple profiles will have a credential file that looks like the following sample (_not real values_).

```ts
[default]
aws_access_key_id=AKIAW7K
aws_secret_access_key=sX/flzzjJHEMPLJG1/jKCAD

[quicken]
aws_access_key_id=AKIAJVWCJ
aws_secret_access_key=cxENQdXHpF/z6Xq9JYxW
```

To target a specific profile, use the `serverless deploy` command with the option `--aws-profile`.

> `serverless deploy --aws-profile quicken`

Running the `serverless deploy` command after setting the credentials will create

```ts
serverless config credentials --provider aws --key YOUR-KEY --secret SECRET-KEY -o
Serverless: Setting up AWS...
PS D:\development\gitlab\angular-architecture-website\workspace\apps\video>
PS D:\development\gitlab\angular-architecture-website\workspace\apps\video>
PS D:\development\gitlab\angular-architecture-website\workspace\apps\video>
PS D:\development\gitlab\angular-architecture-website\workspace\apps\video> serverless deploy
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service video-serverless.zip file to S3 (131.82 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
......................
Serverless: Stack update finished...
Service Information
service: video-serverless
stage: dev
region: us-east-1
stack: video-serverless-dev
resources: 8
api keys:
  None
endpoints:
  None
functions:
  hello: video-serverless-dev-hello
layers:
  None
Serverless: Publishing service to the Serverless Dashboard...
Serverless: Successfully published your service to the Serverless Dashboard: https://dashboard.serverless.com/tenants/angulararchi
```

## Lambda Function Entry Point

Typically, the entry point to a NextJS node application is the `main.ts` which uses a factory to create the application and hosting with _Express_. However, the purpose of the `lambda.ts` file is to provide an entry point for the server application on AWS Lambda Function. It loads the server application's `AppModule` and available _Controllers_.

> Create a `lambda.ts` file in the `src` folder of the server
> application. Configure it to use and load the application's
> `AppModule`

```ts
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

const express = require('express');

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    nestApp.use(eventContext());
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

// Export the handler : the entry point of the Lambda function
export const main: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
```

## Serverless Configuration (serverless.yml)

The function `name` identifies the function and the map to the specified:

1. handler
2. event(s)

The `handler` is invoked when a specified `event` is triggered. In this case, the Lambda function is configured to run when an HTTP trigger (e.g., AWS Gateway API) of `http://<AWS-PATH-TO-FUNCTION>/hello` is invoked by a client using the HTTP method `get`.

The `plugins` configuration allows the build and deploy process to use the plugins. The `serverless-plugin-typescript` plugin is required if you are using NestJS with TypeScript.

> Note The .zip output file size is limited to 250MB More [information](https://seed.run/docs/serverless-errors/unzipped-size-must-be-smaller-than-bytes.html).

```yml
service: contacts
# app and org for use with dashboard.serverless.com
org: angulararchitecture
app: quicken-contacts

plugins:
  - serverless-plugin-typescript
  - serverless-plugin-optimize
  # - serverless-offline

# You can pin your service to only deploy with a specific Serverless version
# Check out our docs for more details
# frameworkVersion: "=X.X.X"

provider:
  name: aws
  runtime: nodejs12.x
  region: us-west-1
  stage: ${opt:stage, 'dev'}

functions:
  api:
    handler: ./apps/contacts/src/lambda.main
    events:
      - http:
          cors: true
          method: any
          path: /{any+}
      - http:
          cors: true
          method: any
          path: /
```

### Application Name

The application name must exist on your [https://app.serverless.com/](https://app.serverless.com/). The name must match the configuration of the `app` name in the `serverless.yml` file.

> `app: quicken-contacts`

```ts
Error: {"errorMessage":"Application not found. - Please contact support and provide this identifier to reference this issue - 4WDV3L4LDWCS"}
```

## Deploy

Running the `serverless deploy --aws-profile quicken-contacts` command produces the following output.

```ts
serverless deploy --aws-profile quicken
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Optimize: starting engines
Serverless: Optimize: contacts-dev-api
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Installing dependencies for custom CloudFormation resources...
Serverless: Deprecation warning: Safeguards support has been moved to the @serverless/safeguards-plugin external plugin and will be removed from the core with next major release.

                        Please visit https://github.com/serverless/safeguards-plugin/ to migrate your safeguards to the new plugin.
                        You may also disable safeguards by setting "custom.safeguards.isDisabled: true" in service config

Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service contacts.zip file to S3 (997.73 KB)...
Serverless: Uploading custom CloudFormation resources...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
............................................................
Serverless: Stack update finished...
Service Information
service: contacts
stage: dev
region: us-west-1
stack: contacts-dev
resources: 21
api keys:
Serverless: Stack update finished...
Service Information
service: contacts
stage: dev
region: us-west-1
stack: contacts-dev
resources: 21
api keys:
  None
endpoints:
  ANY - https://juz537ocx2.execute-api.us-west-1.amazonaws.com/dev/{any+}
  ANY - https://juz537ocx2.execute-api.us-west-1.amazonaws.com/dev/
functions:
  api: contacts-dev-api
layers:
  None
Serverless: Publishing service to the Serverless Dashboard...
Serverless: Successfully published your service to the Serverless Dashboard: https://dashboard.serverless.com/tenants/angulararchitecture/applications/quicken-contacts/services/contacts/stage/dev/region/us-west-1
```

## Results

Use the URL to view the results in your browser. The `event` information from the HTTP request is included in the response.

```ts
GET - https://XXXXXXX.execute-api.us-west-1.amazonaws.com/dev/hello
```

The results of the HTTP get request:

```json
{
  "message": "Hello Serverless Videos...",
  "input": {
    "resource": "/hello",
    "path": "/hello",
    "httpMethod": "GET",
    "headers": {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.9",
      "CloudFront-Forwarded-Proto": "https",
      "CloudFront-Is-Desktop-Viewer": "true",
      "CloudFront-Is-Mobile-Viewer": "false",
      "CloudFront-Is-SmartTV-Viewer": "false",
      "CloudFront-Is-Tablet-Viewer": "false",
      "CloudFront-Viewer-Country": "US",
      "Host": "pt5dwy8gif.execute-api.us-west-1.amazonaws.com",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
      "Via": "2.0 29f1da35ce271d2cdc88184ed0c1f86d.cloudfront.net (CloudFront)",
      "X-Amz-Cf-Id": "D3wi7uA1FkSzKyVQuUR5AkNy9ThH32KjSTBIZJZvhQ4cyqu0HgvwmQ==",
      "X-Amzn-Trace-Id": "Root=1-5f42d145-a5fa292e8052fda0df091691",
      "X-Forwarded-For": "75.166.173.243, 70.132.0.173",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
      "Accept": ["text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"],
      "Accept-Encoding": ["gzip, deflate, br"],
      "Accept-Language": ["en-US,en;q=0.9"],
      "CloudFront-Forwarded-Proto": ["https"],
      "CloudFront-Is-Desktop-Viewer": ["true"],
      "CloudFront-Is-Mobile-Viewer": ["false"],
      "CloudFront-Is-SmartTV-Viewer": ["false"],
      "CloudFront-Is-Tablet-Viewer": ["false"],
      "CloudFront-Viewer-Country": ["US"],
      "Host": ["pt5dwy8gif.execute-api.us-west-1.amazonaws.com"],
      "sec-fetch-dest": ["document"],
      "sec-fetch-mode": ["navigate"],
      "sec-fetch-site": ["none"],
      "sec-fetch-user": ["?1"],
      "upgrade-insecure-requests": ["1"],
      "User-Agent": ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36"],
      "Via": ["2.0 29f1da35ce271d2cdc88184ed0c1f86d.cloudfront.net (CloudFront)"],
      "X-Amz-Cf-Id": ["D3wi7uA1FkSzKyVQuUR5AkNy9ThH32KjSTBIZJZvhQ4cyqu0HgvwmQ=="],
      "X-Amzn-Trace-Id": ["Root=1-5f42d145-a5fa292e8052fda0df091691"],
      "X-Forwarded-For": ["75.166.173.243, 70.132.0.173"],
      "X-Forwarded-Port": ["443"],
      "X-Forwarded-Proto": ["https"]
    },
    "queryStringParameters": null,
    "multiValueQueryStringParameters": null,
    "pathParameters": null,
    "stageVariables": null,
    "requestContext": {
      "resourceId": "9nhg8a",
      "resourcePath": "/hello",
      "httpMethod": "GET",
      "extendedRequestId": "RvWi0HkMyK4FWFg=",
      "requestTime": "23/Aug/2020:20:27:49 +0000",
      "path": "/dev/hello",
      "accountId": "516631029472",
      "protocol": "HTTP/1.1",
      "stage": "dev",
      "domainPrefix": "pt5dwy8gif",
      "requestTimeEpoch": 1598214469144,
      "requestId": "6601c39f-f0d6-460d-a08d-8fa10cd69750",
      "identity": {
        "cognitoIdentityPoolId": null,
        "accountId": null,
        "cognitoIdentityId": null,
        "caller": null,
        "sourceIp": "75.166.173.243",
        "principalOrgId": null,
        "accessKey": null,
        "cognitoAuthenticationType": null,
        "cognitoAuthenticationProvider": null,
        "userArn": null,
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36",
        "user": null
      },
      "domainName": "XXXXXXX.execute-api.us-west-1.amazonaws.com",
      "apiId": "pt5dwy8gif"
    },
    "body": null,
    "isBase64Encoded": false
  }
}
```

## Serverless with NestJS + Lambda Functions

Update the `serverless.yml` to map the HTTP `event` paths to `any` and a _default_ without a path. The `/` allows a request without any path information.

```yml
service: video-serverless-test
# app and org for use with dashboard.serverless.com
org: angulararchitecture
app: video-serverless

plugins:
  - serverless-plugin-typescript
  - serverless-plugin-optimize
  # - serverless-offline

provider:
  name: aws
  runtime: nodejs12.x
  region: us-west-1
  stage: ${opt:stage, 'dev'}

functions:
  api:
    handler: ./apps/video/src/lambda.main
    #    The following are a few example events you can configure
    #    NOTE: Please make sure to change your handler code to work with those events
    #    Check the event documentation for details
    events:
      - http:
          cors: true
          method: any
          path: /{any+}
      - http:
          cors: true
          method: any
          path: /
```

The `lambda.ts` file provides a handler function that returns a `NestJS` application context/proxy.

```ts
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

const express = require('express');

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

// Create the Nest.js server and convert it into an Express.js server
async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    nestApp.use(eventContext());
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

// Export the handler : the entry point of the Lambda function
export const main: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
```

The _NestJS_ application provides a controller with with (2) API endpoints:

```ts
import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('hello')
  sayHello() {
    return `Hello Serverless from NestJS + Express application!`;
  }
}
```

Build the new configuration:

```ts
serverless deploy
Serverless: Compiling with Typescript...
Serverless: Using local tsconfig.json
Serverless: Typescript compiled.
Serverless: Optimize: starting engines
Serverless: Optimize: video-serverless-test-dev-api
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Installing dependencies for custom CloudFormation resources...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service video-serverless-test.zip file to S3 (990.31 KB)...
Serverless: Uploading custom CloudFormation resources...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
service: video-serverless-test
stage: dev
region: us-west-1
stack: video-serverless-test-dev
resources: 21
api keys:
service: video-serverless-test
stage: dev
region: us-west-1
stack: video-serverless-test-dev
resources: 21
api keys:
  None
endpoints:
  ANY - https://XXXXXXXX.execute-api.us-west-1.amazonaws.com/dev/{any+}
  ANY - https://XXXXXXXX.execute-api.us-west-1.amazonaws.com/dev/
functions:
  api: video-serverless-test-dev-api
layers:
  None
Serverless: Removing old service artifacts from S3...
Serverless: Publishing service to the Serverless Dashboard...
Serverless: Successfully published your service to the Serverless Dashboard: https://dashboard.serverless.com/tenants/angulararchitecture/applications/video-serverless/services/video-serverless-test/stage/dev/region/us-west-1
```

1. `/` an empty path that maps to the `getData()` operation.

> Returns: `{"message":"Welcome to SERVERLESS VIDEOS!"}`

2. the `/hello` path that maps to the `sayHello()` operation

> Returns: Hello Serverless from NestJS + Express application!

## Nest Domain Library

Create a server-side library for the NestJs application.

> Use the Nx command:
> `nx generate @nrwl/nest:library api/videos --service --global --buildable`

The output of the CLI command is:

```ts
nx generate @nrwl/nest:library api/videos --service --global --buildable
CREATE libs/api/videos/tslint.json (94 bytes)
CREATE libs/api/videos/README.md (174 bytes)
CREATE libs/api/videos/tsconfig.json (147 bytes)
CREATE libs/api/videos/tsconfig.lib.json (256 bytes)
CREATE libs/api/videos/src/index.ts (83 bytes)
CREATE libs/api/videos/jest.config.js (279 bytes)
CREATE libs/api/videos/tsconfig.spec.json (252 bytes)
CREATE libs/api/videos/package.json (71 bytes)
CREATE libs/api/videos/src/lib/api-videos.module.ts (245 bytes)
CREATE libs/api/videos/src/lib/api-videos.service.spec.ts (433 bytes)
CREATE libs/api/videos/src/lib/api-videos.service.ts (113 bytes)
UPDATE tsconfig.json (2092 bytes)
UPDATE angular.json (31975 bytes)
UPDATE nx.json (1581 bytes)
```

The _angular.json_ is updated with the new _library_ project for the API.

```json
"api-videos": {
  "root": "libs/api/videos",
  "sourceRoot": "libs/api/videos/src",
  "projectType": "library",
  "schematics": {},
  "architect": {
    "lint": {
      "builder": "@angular-devkit/build-angular:tslint",
      "options": {
        "tsConfig": ["libs/api/videos/tsconfig.lib.json", "libs/api/videos/tsconfig.spec.json"],
        "exclude": ["**/node_modules/**", "!libs/api/videos/**/*"]
      }
    },
    "test": {
      "builder": "@nrwl/jest:jest",
      "options": {
        "jestConfig": "libs/api/videos/jest.config.js",
        "tsConfig": "libs/api/videos/tsconfig.spec.json",
        "passWithNoTests": true
      }
    },
    "build": {
      "builder": "@nrwl/node:package",
      "options": {
        "outputPath": "dist/libs/api/videos",
        "tsConfig": "libs/api/videos/tsconfig.lib.json",
        "packageJson": "libs/api/videos/package.json",
        "main": "libs/api/videos/src/index.ts",
        "assets": ["libs/api/videos/*.md"]
      }
    }
  }
}
```

The _tsconfig.json_ `paths` contains a new entry for the library project. It is using the `@angular-architecture` npm scope name.

```json
"@angular-architecture/api/videos": ["libs/api/videos/src/index.ts"]
```

## Resources

- [NestJs + TypeScript with Serverless](https://www.serverless.com/examples/aws-node-typescript-nest)
- [Multiple AWS Profiles](https://serverless-stack.com/chapters/configure-multiple-aws-profiles.html)
