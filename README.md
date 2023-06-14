# @bridge-tools/core

`@bridge-tools/core` is an open-source library written in Typescript. It is designed to simplify the process of writing bridge software. The types and functions provided form the fundamentals to allow a Typescript bridge platform to be built quickly, with less initial effort.

The idea of `@bridge-tools/core` came from libraries designed for other games, such as [chess.js](https://github.com/jhlywa/chess.js).

### Apps and Packages

- `packages/core`: the main library code, holding the basic types and functions to manipulate them
- `packages/generator`: a package to generate random deals
- `apps/website`: the code for the website at [bridge-tools.com](https://bridge-tools.com)
- `tools/eslint-config-bridge-tools`: an `eslint` configuration for this mono-repo
- `tools/tsconfig`: the `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To run the development server, run the following command:

```
pnpm dev
```
