# @bridge-tools/rng-node-crypto

This contains the node-crypto RNG function to be used with [@bridge-tools/generator](https://github.com/bridge-tools/generator) and is part of the `@bridge-tools` suite of open-source bridge libraries written in Typescript. For more information on the `@bridge-tools` libraries, see [@bridge-tools/core](https://github.com/bridge-tools/core).

**This was moved to it's own package so it can be imported only in packages which need it.** When this was included in the main `@bridge-tools/generator` package, bundlers like `browserify` would include all of the `crypto` package in the bundle, which was thousands of lines long and isn't needed in a browser as it has [alternative cryptography](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) implementations.

# Installation

`@bridge-tools/rng-node-crypto` is available on [npm](https://www.npmjs.com/package/@bridge-tools/rng-node-crypto).

It can be installed via:

```console
$ npm i @bridge-tools/rng-node-crypto
```

# Usage

**This package should only be used in projects which will be run using nodejs, not within a browser. If you want a cryptographically secure RNG for the browser, use the BrowserCrypto RNG within `@bridge-tools/generator`.**

Example usage:

```typescript
const { generateDeals } = require('@bridge-tools/generator');
const {
	NodeCryptoRandomNumberGenerator,
} = require('@bridge-tools/rng-node-crytpo');

const deal = generateDeals({
	num: 5,
	rng: NodeCryptoRandomNumberGenerator,
});
```

We have benchmarked the library, with the results available in the [BENCHMARKS](https://github.com/bridge-tools/generator/blob/main/BENCHMARK.md) file in `@bridge-tools/generator`.

For more examples and the code used for the benchmarks, see the `examples` directory in `@bridge-tools/generator`.

We would appreciate attribution, just a simple link back to this github, but we have not made it a requirement.
