# @bridge-tools/generator

This is the hand generation library which is part of the `@bridge-tools` suite of open-source bridge libraries written in Typescript. For more information on the `@bridge-tools` libraries, see [@bridge-tools/core](https://github.com/bridge-tools/core).

# Features

-   Encode a bridge deal into a bigint
-   Decode a bigint into a bridge deal
-   Generate random bigints using multiple methods:
    -   `math.random` - This will be available in any javascript application
    -   `crypto.getRandomValues` - This will be available in browsers. For more information see [mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) or [caniuse](https://caniuse.com/getrandomvalues).
    -   `crypto.randomInt` - **Moved to [@bridge-tools/rng-node-crypto](https://github.com/bridge-tools/rng-node-crypto).** This will be available when running the javascript via nodejs. For more information see [randomInt](https://nodejs.org/api/crypto.html#cryptorandomintmin-max-callback).

# Installation

`@bridge-tools/generator` is available on [npm](https://www.npmjs.com/package/@bridge-tools/generator).

It can be installed via:

```console
$ npm i @bridge-tools/generator
```

# Usage

To start generating deals it is as simple as:

```typescript
const { generateDeals } = require('@bridge-tools/generator');

const deal = generateDeals({
	num: 5,
});
```

We have benchmarked the library, with the results available in the [BENCHMARKS](BENCHMARKS.md) file.

For more examples and the code used for the benchmarks, see the `examples` directory.

We would appreciate attribution, just a simple link back to this github, but we have not made it a requirement.

**Disclaimer:** _The use of cryptographically secure random number generators provided in this library does not guarantee that the deal generation is secure. The developers have not and do not have the capability of assuring the cryptographic security of the deal generation. Using this library for competitive competitions is entirely at your risk. Neither `bridge-tools` nor it's contributors accepts responsibility due to any damage caused by the use of this library._

# Testing

The unit tests can be run via the command:

```console
$ npm test
```

# Getting involved

If you have questions, concerns, bug reports, etc, please file an issue in this repository's Issue Tracker or ask a question on the [discord](https://discord.gg/fxAQcRY2dt).
To get in touch directly you can email us at [aaron@bridge-tools.com](mailto:aaron@bridge-tools.com?subject=[GitHub]).

To contribute either send us an email or join the [discord](https://discord.gg/fxAQcRY2dt). Contributions should follow the guidelines set out in [CONTRIBUTING](https://github.com/bridge-tools/core/blob/main/CONTRIBUTING.md).

If you would like to support further development of the `@bridge-tools` suite you can [buy us a coffee](https://www.buymeacoffee.com/bridgetools).

<a href="https://www.buymeacoffee.com/bridgetools" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

# See also

## Current

-   [@bridge-tools/core](https://github.com/bridge-tools/core) - The core library, which contains the types and basic functions for most bridge functionality.

## Planned

-   `@bridge-tools/lin` - For conversion to and from `lin` files
-   `@bridge-tools/pbn` - For conversion to and from `pbn` files
-   `@bridge-tools/dds` - A pure javascript double-dummy solver which can be run in a browser

# Acknowledegments

1. [Big Deal](https://sater.home.xs4all.nl/doc.html#_Toc489968645) - Hans van Staveren - Provided lots of background knowledge on deal generation.
2. [Mapping Bridge Deals](http://www.rpbridge.net/7z68.htm) - Richard Pavlicek - Provided the algorithms used to convert a deal to and from an id.
