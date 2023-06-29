import { type RandomGenerator } from "../types";

const RANDOM_SIZE = 64;

/**
 * This random generator should be used in browsers, it should be cryptographically secure, so can be used tournament dealing.
 * This has not been checked, however, and therefore should be used for tournaments at your own risk.
 *
 */
export const BrowserCryptoRandomNumberGenerator: RandomGenerator = (
  bits: number
) => {
  const values = new BigInt64Array(Math.ceil(bits / RANDOM_SIZE));
  window.crypto.getRandomValues(values);

  let result = 0n;
  for (let index = 0; index * RANDOM_SIZE < bits; index++) {
    const offset = index * RANDOM_SIZE;

    // If we're on the final iteration, drop off any unnecessary bits
    const rand =
      offset + RANDOM_SIZE > bits
        ? values[index] >> BigInt(offset + RANDOM_SIZE - bits)
        : values[index];
    result += rand;
  }

  return result;
};
