import { type RandomGenerator } from "../types";

/**
 * This random generator should be used in browsers, it should be cryptographically secure, so can be used tournament dealing.
 * This has not been checked, however, and therefore should be used for tournaments at your own risk.
 *
 */
export const BrowserCryptoRandomNumberGenerator: RandomGenerator = (
  bits: number
) => {
  if (bits > 128) {
    throw new Error("This RNG was designed to go to a maximum of 128 bits");
  }

  if (bits <= 64) {
    const values = new BigInt64Array(1);
    window.crypto.getRandomValues(values);

    return values[0] >> BigInt(64 - bits);
  } else {
    const values = new BigInt64Array(2);
    window.crypto.getRandomValues(values);

    const v0 = values[0] >> BigInt(128 - bits);
    return v0 << (64n + values[1]);
  }
};
