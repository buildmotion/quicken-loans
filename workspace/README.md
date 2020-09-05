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

## Create Angular Library Projects

```ts
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=actions
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=components
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=configuration
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=error-handling
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=foundation
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=http-service
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=logging
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=notification
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=rules-engine
ng generate @nrwl/angular:library --publishable --simpleModuleName --style=scss --prefix=mv --name=security
```

## Create Server Application Project

## Create Server Library Projects

## Nx

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

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

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@workspace/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
