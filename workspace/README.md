# @Valencia :: Quicken Brand Marketing Code Test

## Nx Workspace

Create a new Angular Workspace with super powers using [Nx](https://nx.dev) from [Nrwl.io](https://nrwl.io). Use the npx CLI command to create a new Angular Workspace.

> `npx create-nx-workspace workspace --npm-scope=valencia`

```ts
npx create-nx-workspace workspace --npm-scope=valencia
? What to create in the new workspace empty             [an empty workspace]
? CLI to power the Nx workspace       Angular CLI  [Extensible CLI for Angular applications. Recommended for Angular projects.]
Creating a sandbox with Nx...
warning @angular/cli > universal-analytics > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
warning @angular/cli > universal-analytics > request > har-validator@5.1.5: this library is no longer supported
warning Your current version of Yarn is out of date. The latest version is "1.22.5", while you're on "1.22.1".
new workspace "--npm-scope=valencia" --preset="empty" --interactive=false --collection=@nrwl/workspace
CREATE workspace/nx.json (259 bytes)
CREATE workspace/tsconfig.json (509 bytes)
CREATE workspace/package.json (1156 bytes)
CREATE workspace/README.md (2694 bytes)
CREATE workspace/.editorconfig (245 bytes)
CREATE workspace/.gitignore (503 bytes)
CREATE workspace/.prettierignore (74 bytes)
CREATE workspace/.prettierrc (26 bytes)
CREATE workspace/angular.json (96 bytes)
CREATE workspace/apps/.gitkeep (1 bytes)
CREATE workspace/libs/.gitkeep (0 bytes)
CREATE workspace/tools/tsconfig.tools.json (218 bytes)
CREATE workspace/tools/schematics/.gitkeep (0 bytes)
CREATE workspace/.vscode/extensions.json (164 bytes)
√ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
PS D:\development\github\quicken-loans>
```

### Nrwl Angular Schematics

Install the following package for the workspace environment to provide the Angular schematics.

> yarn add @nrwl/angular -D

## Create Application Project

Use the Angular CLI and the prompted options to create a new application projects for the workspace.

```ts
ng g application quicken-contacts
? Which stylesheet format would you like to use? SASS(.scss)  [ http://sass-lang.com   ]
? Would you like to configure routing for this application? Yes
CREATE jest.config.js (250 bytes)
CREATE tslint.json (2311 bytes)
CREATE apps/quicken-contacts/tsconfig.json (97 bytes)
CREATE apps/quicken-contacts/src/favicon.ico (15086 bytes)
CREATE apps/quicken-contacts/browserslist (429 bytes)
CREATE apps/quicken-contacts/tsconfig.app.json (163 bytes)
CREATE apps/quicken-contacts/tslint.json (248 bytes)
CREATE apps/quicken-contacts/src/index.html (339 bytes)
CREATE apps/quicken-contacts/src/main.ts (375 bytes)
CREATE apps/quicken-contacts/src/polyfills.ts (2836 bytes)
CREATE apps/quicken-contacts/src/styles.scss (80 bytes)
CREATE apps/quicken-contacts/src/assets/.gitkeep (0 bytes)
CREATE apps/quicken-contacts/src/environments/environment.prod.ts (51 bytes)
CREATE apps/quicken-contacts/src/environments/environment.ts (662 bytes)
CREATE apps/quicken-contacts/src/app/app.module.ts (417 bytes)
CREATE apps/quicken-contacts/src/app/app.component.html (3017 bytes)
CREATE apps/quicken-contacts/src/app/app.component.spec.ts (1053 bytes)
CREATE apps/quicken-contacts/src/app/app.component.ts (226 bytes)
CREATE apps/quicken-contacts/src/app/app.component.scss (2088 bytes)
CREATE apps/quicken-contacts/jest.config.js (369 bytes)
CREATE apps/quicken-contacts/tsconfig.spec.json (233 bytes)
CREATE apps/quicken-contacts/src/test-setup.ts (30 bytes)
CREATE apps/quicken-contacts-e2e/tslint.json (97 bytes)
CREATE apps/quicken-contacts-e2e/cypress.json (432 bytes)
CREATE apps/quicken-contacts-e2e/tsconfig.e2e.json (188 bytes)
CREATE apps/quicken-contacts-e2e/tsconfig.json (137 bytes)
CREATE apps/quicken-contacts-e2e/src/fixtures/example.json (80 bytes)
CREATE apps/quicken-contacts-e2e/src/integration/app.spec.ts (424 bytes)
CREATE apps/quicken-contacts-e2e/src/plugins/index.js (832 bytes)
CREATE apps/quicken-contacts-e2e/src/support/app.po.ts (47 bytes)
CREATE apps/quicken-contacts-e2e/src/support/commands.ts (1068 bytes)
CREATE apps/quicken-contacts-e2e/src/support/index.ts (599 bytes)
UPDATE package.json (1988 bytes)
UPDATE angular.json (4586 bytes)
UPDATE nx.json (417 bytes)
\ Installing packages...                                                                                                  \
√ Packages installed successfully.
```

### Configure Chrome Launch Debugger

Configure the Chrome launch debugger using the command pallete.

> Ctrl + P
> Debug: Open launch.json

- update the port to `4200`
- update the name to the target project

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Quicken Contacts",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

### Build and Serve

Use the CLI command below to build and serve the application. You can use the Chrome debugger to view the application using the `launch` configuration above - click `F5` to launch.

> ng serve

### Install Spark Design System

Install the required packages in the workspace - they will now be available to all application projects. Nice!

> `yarn add @sparkdesignsystem/spark @sparkdesignsystem/spark-angular -D`

The following warning was displayed after installing the packages.

```ts
$ ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points
Warning: Entry point '@sparkdesignsystem/spark-angular' contains deep imports into 'D:/development/github/quicken-loans/workspace/node_modules/lodash/uniqueId'. This is probably not a
problem, but may cause the compilation of entry points to be out of order.
```

Update the application project's `styles.scss` file with the `import` of the spark SCSS file.

> Note: If you are using an Angular Workspace the path will be
> different from the site documentation.

```css
/* You can add global styles to this file, and also import other style files */
@import './../../../node_modules/@sparkdesignsystem/spark/_spark.scss';
```

## Application Modules and Configuration

### Core Module

```ts
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [CommonModule, BrowserModule, BrowserAnimationsModule];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(`Application requires single instance of CoreModule.`);
    }
  }
}
```

### Shared Module

```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [CommonModule, FormsModule, HttpClientModule, HttpClientModule, ReactiveFormsModule, RouterModule];
@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
```

### Cross-Cutting Module

```ts
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigurationModule, ConfigurationService, ConfigurationContext } from '@valencia/configuration';
import { ErrorHandlingModule, ErrorHandlingService } from '@valencia/error-handling';
import { HttpErrorInterceptor } from '@valencia/http-service';
import { LogglyWriter, ConsoleWriter, LoggingModule, LoggingService } from '@valencia/logging';
import { NotificationService } from '@valencia/notification';
// tslint:disable-next-line:nx-enforce-module-boundaries
import { AppConfig } from 'apps/quicken-contacts/src/config/app-config';
import { LogglyService } from 'ngx-loggly-logger';

/**
 * The factory function to initialize the configuration service for the application.
 * @param configService
 */
export function initializeConfiguration(configContext: ConfigurationContext, configService: ConfigurationService) {
  return () => {
    configService.settings = configContext.config;
    return configService;
  };
}

/**
 * The factory function to initialize the logging service and writer for the
 * application.
 *
 * @param loggingService
 * @param consoleWriter
 */
export function initializeLogWriter(loggingService: LoggingService, consoleWriter: ConsoleWriter) {
  return () => {
    return consoleWriter;
  };
}

@NgModule({
  declarations: [],
  imports: [CommonModule, ConfigurationModule, ErrorHandlingModule, LoggingModule],
  providers: [],
})
export class CrossCuttingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CrossCuttingModule,
      providers: [
        {
          provide: ConfigurationContext,
          useValue: { config: AppConfig },
        },
        ConfigurationService,
        LoggingService,
        ConsoleWriter,
        LogglyWriter,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeConfiguration,
          deps: [ConfigurationContext, ConfigurationService],
          multi: true,
        },
        ConsoleWriter,
        LogglyService,
        LogglyWriter,
        LoggingService,
        {
          provide: ErrorHandler,
          useClass: ErrorHandlingService,
          deps: [ConfigurationService, LoggingService],
        },
        {
          provide: APP_INITIALIZER,
          useFactory: initializeLogWriter,
          deps: [LoggingService, ConsoleWriter, LogglyWriter],
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true,
        },
        NotificationService,
      ],
    };
  }
}
```

### App Module

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { CrossCuttingModule } from './modules/cross-cutting/cross-cutting.module';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    CrossCuttingModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    SparkAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Configuration

> `yarn add ngx-loggly-logger`

## Code Formatting

Install the following packages.

```json
"husky": "^4.2.5",
"pretty-quick": "^3.0.0",
```

> `yarn add husky pretty-quick`

Add the `husky` configuration in the root of the _package.json_ file.

```json
"husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged  --pattern=\"**/*.*(ts|json)\" --verbose"
    }
  },
```

Verify your lint configuration.

> yarn lint

Fix any formatting issues.

## Create Angular Library Projects

```ts
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=actions
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=components
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=configuration
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=error-handling
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=foundation
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=http-service
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=logging
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=notification
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=aa --name=rules-engine
```

## Create Micro-Frontend (Application Project)

Create a new library project that will have the responsibility of a _Contacts_ UI. Using a library project type for UI implements provides an effective and efficient strategy to share and reuse UI code as _micro-applications_ or _micro-frontends_. A micro-frontend allows for the following:

- multiple application projects can reuse a single micro-application
- application projects are composable using micro-applications as aggregates
  - single-source of truth
  - higher quality
  - no versioning required
  - eliminates scattered code throughout different applications
  - no copy/past coding
  - can be shared/reused by other micro-frontends
- single micro-frontend applications are modular
  - encapsulate UI and specific feature sets
- allows for shared application state, resources, styles, and assets
  - global services: security, logging, configuration
  - SCSS
  - images, fonts, configuration

### Generate Micro-Frontend with CLI

Use the Angular CLI to generate a micro-frontend library project.

> `ng g library contactsApp --simple-module-name --directory=quicken/micro-apps --publishable`

```ts
ng g library contactsApp --simple-module-name --directory=quicken/micro-apps  --publishable
? Which stylesheet format would you like to use? SASS(.scss)  [ http://sass-lang.com   ]
CREATE libs/quicken/micro-apps/contacts-app/ng-package.json (193 bytes)
CREATE libs/quicken/micro-apps/contacts-app/package.json (196 bytes)
CREATE libs/quicken/micro-apps/contacts-app/README.md (186 bytes)
CREATE libs/quicken/micro-apps/contacts-app/tsconfig.lib.json (414 bytes)
CREATE libs/quicken/micro-apps/contacts-app/tsconfig.lib.prod.json (97 bytes)
CREATE libs/quicken/micro-apps/contacts-app/src/lib/contacts-app.module.ts (167 bytes)
CREATE libs/quicken/micro-apps/contacts-app/tsconfig.json (129 bytes)
CREATE libs/quicken/micro-apps/contacts-app/jest.config.js (413 bytes)
CREATE libs/quicken/micro-apps/contacts-app/tsconfig.spec.json (239 bytes)
CREATE libs/quicken/micro-apps/contacts-app/src/test-setup.ts (30 bytes)
UPDATE angular.json (20567 bytes)
UPDATE nx.json (973 bytes)
UPDATE tsconfig.json (1277 bytes)
√ Packages installed successfully.
```

### Add Routing Module to Micro-Frontend

Angular UI modules need routing modules with routes to components. Add a routing module to the micro-frontend library project using the CLI.

> `ng g m appRouting --module=contacts-app.module --project=quicken-micro-apps-contacts-app`

The routing module is created. The CLI also updates the library module to import the routing module. When the routing module is set up with routes - the micro-frontend application will initialize the routes with a `forChild()` call.

```ts
ng g m appRouting  --module=contacts-app.module --project=quicken-micro-apps-contacts-app
CREATE libs/quicken/micro-apps/contacts-app/src/lib/app-routing/app-routing.module.ts (196 bytes)
UPDATE libs/quicken/micro-apps/contacts-app/src/lib/contacts-app.module.ts (254 bytes)
```

### Add Components to Micro-Frontend

Run the following CLI commands to create the components in the micro-frontend library project.

> Pro Tip: Install the [Nx Console extension](https://github.com/nrwl/nx-console) for Visual Studio Code. It provides
> a UI to collect and configure a CLI command. You can capture the command in a
> terminal to see the execution results and command details.

```ts
ng generate @schematics/angular:module --name=landing --project=quicken-micro-apps-contacts-app --module=app-routing/app-routing.module --no-commonModule --lintFix --route=landing --routing
ng generate @schematics/angular:module --name=list --project=quicken-micro-apps-contacts-app --module=app-routing/app-routing.module --no-commonModule --lintFix --route=list --routing
ng generate @schematics/angular:module --name=item --project=quicken-micro-apps-contacts-app --module=app-routing/app-routing.module --no-commonModule --lintFix --route=item --routing
ng generate @schematics/angular:module --name=add --project=quicken-micro-apps-contacts-app --module=app-routing/app-routing.module --no-commonModule --lintFix --route=add --routing
```

See the sample output below for the `contact-item` component:

```ts
ng generate @schematics/angular:module --name=landing --project=quicken-micro-apps-contacts-app --module=app-routing/app-routing.module --no-commonModule --lintFix --route=landing --routing <
CREATE libs/quicken/micro-apps/contacts-app/src/lib/landing/landing-routing.module.ts (348 bytes)
CREATE libs/quicken/micro-apps/contacts-app/src/lib/landing/landing.module.ts (290 bytes)
CREATE libs/quicken/micro-apps/contacts-app/src/lib/landing/landing.component.html (22 bytes)
CREATE libs/quicken/micro-apps/contacts-app/src/lib/landing/landing.component.spec.ts (635 bytes)
CREATE libs/quicken/micro-apps/contacts-app/src/lib/landing/landing.component.ts (284 bytes)
CREATE libs/quicken/micro-apps/contacts-app/src/lib/landing/landing.component.css (0 bytes)
UPDATE libs/quicken/micro-apps/contacts-app/src/lib/app-routing/app-routing.module.ts (901 bytes)
```

#### Component UI Services

Each of the UI components will have a designated UI service to coordinate UI/UX state and any data operations with the domain service. The UI service

- data operations
  - handles the response
  - manages the publishing of data using Async Observables
  - manages the publishing of UI events using Async Observables

```ts
ng generate @schematics/angular:service --name=AddContactUI --project=quicken-micro-apps-contacts-app --lintFix --skipTests --no-interactive --dry-run <

CREATE libs/quicken/micro-apps/contacts-app/src/lib/add-contact-ui.service.ts (141 bytes)
```

The UI service extends from the `ServiceBase` class to provide common behavior for Angular services. A _Logging_ provider is injected into the service via the constructor.

```ts
import { Injectable } from '@angular/core';
import { ServiceBase } from '@valencia/foundation';
import { LoggingService } from '@valencia/logging';

@Injectable({
  providedIn: 'root',
})
export class AddContactUIService extends ServiceBase {
  constructor(loggingService: LoggingService) {
    super('AddContactUIService', loggingService);
  }
}
```

### Add Routing to Micro-Frontend

Update the `AppRoutingModule` with routes and register the routes using the
`RouterModule.forChild(routes)` call in the module's _import_ section.

> Pro Tip: Use the Nx Console mentioned in the [Add Components to
> Micro-Frontend](#add-components-to-micro-frontend) section. This will
> automatically update application routing module with lazy-loaded routes to the SCAMs

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'landing', loadChildren: () => import('../landing/landing.module').then(m => m.LandingModule) },
  { path: 'list', loadChildren: () => import('../list/list.module').then(m => m.ListModule) },
  { path: 'item/edit:id', loadChildren: () => import('../item/item.module').then(m => m.ItemModule) },
  { path: 'add', loadChildren: () => import('../add/add.module').then(m => m.AddModule) },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppRoutingModule {}
```

Update the host application to load the micro-frontend application using lazy-loading.

```ts
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contacts/landing',
    loadChildren: () => import('@valencia/quicken/micro-apps/contacts-app').then(m => m.ContactsAppModule),
  },
];

@NgModule({
  declarations: [],
  imports: [],
})
export class AppRoutingModule {}
```

## Create Domain Library Projects

A domain library encapsulates all of the business logic for the specified _service_.s

```ts
Executing task: ng generate @nrwl/angular:library --name=contactsService --style=scss --directory=quicken/domain --publishable --simpleModuleName <

CREATE libs/quicken/domain/contacts-service/ng-package.json (193 bytes)
CREATE libs/quicken/domain/contacts-service/package.json (196 bytes)
CREATE libs/quicken/domain/contacts-service/README.md (186 bytes)
CREATE libs/quicken/domain/contacts-service/tsconfig.lib.json (414 bytes)
CREATE libs/quicken/domain/contacts-service/tsconfig.lib.prod.json (97 bytes)
CREATE libs/quicken/domain/contacts-service/tslint.json (254 bytes)
CREATE libs/quicken/domain/contacts-service/src/index.ts (47 bytes)
CREATE libs/quicken/domain/contacts-service/src/lib/contacts-service.module.ts (171 bytes)
CREATE libs/quicken/domain/contacts-service/tsconfig.json (129 bytes)
CREATE libs/quicken/domain/contacts-service/jest.config.js (413 bytes)
CREATE libs/quicken/domain/contacts-service/tsconfig.spec.json (239 bytes)
CREATE libs/quicken/domain/contacts-service/src/test-setup.ts (30 bytes)
UPDATE angular.json (22116 bytes)
UPDATE nx.json (1038 bytes)
UPDATE tsconfig.json (1383 bytes)
√ Packages installed successfully.
```

### Common Domain Library

```ts
ng generate @nrwl/angular:library --name=common --style=scss --directory=quicken/domain --publishable --simpleModuleName <

CREATE libs/quicken/domain/common/ng-package.json (183 bytes)
CREATE libs/quicken/domain/common/package.json (186 bytes)
CREATE libs/quicken/domain/common/README.md (166 bytes)
CREATE libs/quicken/domain/common/tsconfig.lib.json (414 bytes)
CREATE libs/quicken/domain/common/tsconfig.lib.prod.json (97 bytes)
CREATE libs/quicken/domain/common/tslint.json (254 bytes)
CREATE libs/quicken/domain/common/src/index.ts (37 bytes)
CREATE libs/quicken/domain/common/src/lib/common.module.ts (162 bytes)
CREATE libs/quicken/domain/common/tsconfig.json (129 bytes)
CREATE libs/quicken/domain/common/jest.config.js (393 bytes)
CREATE libs/quicken/domain/common/tsconfig.spec.json (239 bytes)
CREATE libs/quicken/domain/common/src/test-setup.ts (30 bytes)
UPDATE angular.json (24794 bytes)
UPDATE nx.json (1133 bytes)
UPDATE tsconfig.json (1525 bytes)
√ Packages installed successfully.
```

```ts
ng generate @nrwl/workspace:library --name=common --directory=quicken/domain <

CREATE libs/quicken/domain/common/tslint.json (97 bytes)
CREATE libs/quicken/domain/common/README.md (196 bytes)
CREATE libs/quicken/domain/common/tsconfig.json (129 bytes)
CREATE libs/quicken/domain/common/tsconfig.lib.json (178 bytes)
CREATE libs/quicken/domain/common/src/index.ts (45 bytes)
CREATE libs/quicken/domain/common/src/lib/quicken-domain-common.ts (0 bytes)
CREATE libs/quicken/domain/common/jest.config.js (280 bytes)
CREATE libs/quicken/domain/common/tsconfig.spec.json (255 bytes)
UPDATE tsconfig.json (1525 bytes)
UPDATE angular.json (24199 bytes)
UPDATE nx.json (1133 bytes)
```

#### Contact DTO (Data Transfer Object)

Create a DTO for the contact information.

> Note that the _contact_ item also contains an
> `options` list of numbers.

```ts
export class ContactDto {
  address1: string;
  address2: string;
  city: string;
  company: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  options: number[] = [];
  phone: string;
  postalCode: string;
  state: string;
}
```

Add a `Contact` model that contains the same information in the DTO, but also has an identifier for the a specific contact item.

```ts
import { ContactDto } from './contact.dto';

export class Contact extends ContactDto {
  contactId: string;
}
```

### API Service for Domain Library

The library project will require a service as an entry point. Create a new service for the library project - the responsibility of the service is to provide an API for any consumers of _ContractsService_.

```ts
ng generate @schematics/angular:service --name=contacts --project=quicken-domain-contacts-service --lintFix --skipTests <
CREATE libs/quicken/domain/contacts-service/src/lib/contacts.service.ts (137 bytes)
```

## Test

Use the following commands to run the test suites in each project

```ts
yarn run test --project=quicken-contacts --watch
yarn run test --project=actions --watch
yarn run test --project=components --watch
yarn run test --project=configuration --watch
yarn run test --project=error-handling --watch
yarn run test --project=foundation --watch
yarn run test --project=http-service --watch
yarn run test --project=logging --watchhttps
yarn run test --project=notification --watch
yarn run test --project=rules-engine --watch
```

## Application Components

```ts
ng generate @schematics/angular:module --name=modules/site --project=quicken-contacts --module=app.module
CREATE apps/quicken-contacts/src/app/modules/site/site.module.ts (190 bytes)
UPDATE apps/quicken-contacts/src/app/app.module.ts (854 bytes)
```

### Add Site Layout Component

```ts
ng generate @schematics/angular:component --name=modules/site/layout --project=quicken-contacts --module=site.module --style=scss --changeDetection=OnPush --lintFix --skipTests <

CREATE apps/quicken-contacts/src/app/modules/site/layout/layout.component.html (21 bytes)
CREATE apps/quicken-contacts/src/app/modules/site/layout/layout.component.ts (357 bytes)
CREATE apps/quicken-contacts/src/app/modules/site/layout/layout.component.scss (0 bytes)
UPDATE apps/quicken-contacts/src/app/modules/site/site.module.ts (422 bytes)
```

### Add Site Header Component

```ts
ng generate @schematics/angular:component --name=modules/header/layout --project=quicken-contacts --module=header.module --style=scss --changeDetection=OnPush --lintFix --skipTests <

CREATE apps/quicken-contacts/src/app/modules/header/layout/layout.component.html (21 bytes)
CREATE apps/quicken-contacts/src/app/modules/header/layout/layout.component.ts (357 bytes)
CREATE apps/quicken-contacts/src/app/modules/header/layout/layout.component.scss (0 bytes)
UPDATE apps/quicken-contacts/src/app/modules/header/header.module.ts (422 bytes)
```

### Add Site Footer Component

```ts
ng generate @schematics/angular:component --name=modules/header/footer --project=quicken-contacts --module=header.module --style=scss --changeDetection=OnPush --lintFix --skipTests <

CREATE apps/quicken-contacts/src/app/modules/header/footer/footer.component.html (21 bytes)
CREATE apps/quicken-contacts/src/app/modules/header/footer/footer.component.ts (357 bytes)
CREATE apps/quicken-contacts/src/app/modules/header/footer/footer.component.scss (0 bytes)
UPDATE apps/quicken-contacts/src/app/modules/header/header.module.ts (422 bytes)
```

## Common Module

```ts
ng generate @nrwl/angular:library --name=common --style=scss --publishable --simpleModuleName <

CREATE libs/common/ng-package.json (156 bytes)
CREATE libs/common/package.json (171 bytes)
CREATE libs/common/README.md (136 bytes)
CREATE libs/common/tsconfig.lib.json (408 bytes)
CREATE libs/common/tsconfig.lib.prod.json (97 bytes)
CREATE libs/common/tslint.json (248 bytes)
CREATE libs/common/src/index.ts (37 bytes)
CREATE libs/common/src/lib/common.module.ts (162 bytes)
CREATE libs/common/tsconfig.json (123 bytes)
CREATE libs/common/jest.config.js (351 bytes)
CREATE libs/common/tsconfig.spec.json (233 bytes)
CREATE libs/common/src/test-setup.ts (30 bytes)
UPDATE angular.json (23365 bytes)
UPDATE nx.json (1078 bytes)
UPDATE tsconfig.json (1439 bytes)
√ Packages installed successfully.
```

## Serverless Deploy Angular App

Use the `serverless` tool to deploy to AWS CloudFront.

> [https://github.com/serverless/examples/tree/master/aws-node-single-page-app-via-cloudfront](https://github.com/serverless/examples/tree/master/aws-node-single-page-app-via-cloudfront)

Install the AWS CLI.

> [https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html)

> [BUCKET-NAME].s3-website.[BUCKET-ZONE].amazonaws.com
> [http://quicken-contacts.s3-website-us-west-1.amazonaws.com/](http://quicken-contacts.s3-website-us-west-1.amazonaws.com/)

asdf

```ts
403 Forbidden
Code: AccessDenied
Message: Access Denied
RequestId: 9236B5475625A198
HostId: 5phd+P8U087J37FgfxV1YYoMv04yYQcbf4nKGto+8xJNyTu9xAlzZ1IylBJ+BIwx4EXprdxrB+k=
An Error Occurred While Attempting to Retrieve a Custom Error Document
Code: AccessDenied
Message: Access Denied
```

```json
{
  "Version": "2020-9-11",
  "Statement": [
    {
      "Sid": "AddPermission",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::quicken-contacts/*"]
    }
  ]
}
```

Running the URL will create a 404 error - the application has not been uploaded to the S3 bucket.

```ts
404 Not Found
Code: NoSuchKey
Message: The specified key does not exist.
Key: index.html
RequestId: CX4YEP5JAJ4R9GBJ
HostId: hzmg7xRvhZgR16BZ6cEn/Let8RORnsJnycjiFWLu5+QNj3o2Fz4c2b1ERF20M61DT52yEqbWSNk=
An Error Occurred While Attempting to Retrieve a Custom Error Document
Code: NoSuchKey
Message: The specified key does not exist.
Key: index.html
```

ARN

```ts
arn:aws:s3:::quicken-contacts
```

## Nx

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

### Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

### Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

### Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@workspace/mylib`.

### Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

### Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

```

```
