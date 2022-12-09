# GraphQL Simple App

## Build notes

The project was build with the following in mind:

* Use a native approach instead of a framework-base implementation. This project uses `Apollo GraphQL Server`
* Apply Clean Design principles
* Use data loaders to avoid the N+1 problem
* Types automatic compilation
* Abstracted modularization
* Use `type` instead of `interface` for the required `DTO - Data Transfer Objects`. DTOs should be handle as data strcutures not as domain objects

## Environment

For development purposes, you just need to:
* Create a file named `.env.development`
* Add the following environment variables according to your setup

```dosini
LOG_LEVEL=[string]
NODE_ENV=development
SERVER_PORT=8080

URL_API=[https://example.com]
POSTS_ENDPOINT=/posts/
AUTHORS_ENDPOINT=/users/
```

## Debugging

For debugging properties you could use a `launch.json` file at *VS Code*

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "name": "graphql",
      "cwd": "${workspaceFolder}",
      "outputCapture": "std",
      "runtimeArgs": [
        "-r",
        "ts-node/register"
      ],
      "args": [
        "${workspaceFolder}/src/main"
      ],
      "env": {
        "NODE_ENV": "development"
      }
    }
  ]
}
```

## Project configuration

The project contains configuration on the following files, to enforce some practices:

* `.editorconfig`
* `.eslintignore`
* `.eslintrc.json`
* `.gitignore`
* `Readme.md`
* `tsconfig.json`
