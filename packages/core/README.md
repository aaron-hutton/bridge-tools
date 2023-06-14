# @bridge-tools/core

`@bridge-tools/core` is an open-source library written in Typescript. It is designed to simplify the process of writing bridge software. The types and functions provided form the fundamentals to allow a Typescript bridge platform to be built quickly, with less initial effort.

The idea of `@bridge-tools/core` came from libraries designed for other games, such as [chess.js](https://github.com/jhlywa/chess.js).

# Features

- Types for cards, bids, boards and more
- Conversion to and from strings
- Score calculation
- Functions for checking validity of auctions and cardplay
- Functions for evaluating tricks
- 100% unit test coverage

# Installation

`@bridge-tools/core` is available on [npm](https://www.npmjs.com/package/@bridge-tools/core).

It can be installed via:

```console
$ npm i @bridge-tools/core
```

# Usage

The components of the library can be imported as required.

For the full list of the different components, view the [README inside ./src](src/README.md).

We would appreciate attribution, just a simple link back to this github, but we have not made it a requirement.

# Testing

We're proud to have 100% test coverage. The unit tests can be run via the command:

```console
$ npm test
```

# Getting involved

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker or ask a question on the [discord](https://discord.gg/fxAQcRY2dt).
To get in touch directly you can email us at [aaron@bridge-tools.com](mailto:aaron@bridge-tools.com?subject=[GitHub]).

To contribute either send us an email or join the [discord](https://discord.gg/fxAQcRY2dt). Contributions should follow the guidelines set out in [CONTRIBUTING](CONTRIBUTING.md).

If you would like to support further development of the `@bridge-tools` suite you can [buy us a coffee](https://www.buymeacoffee.com/bridgetools).

<a href="https://www.buymeacoffee.com/bridgetools" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

# See also

## Current

- [@bridge-tools/generator](https://github.com/aaron-hutton/bridge-tools/tree/main/packages/generator) - Used for hand generation using fast or cryptographically secure RNGs

## Planned

- `@bridge-tools/lin` - For conversion to and from `lin` files
- `@bridge-tools/pbn` - For conversion to and from `pbn` files
- `@bridge-tools/dds` - A pure javascript double-dummy solver which can be run in a browser
