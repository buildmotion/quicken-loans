# Valencia :: Quicken Brand Marketing Code Test

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
