import { type RandomGenerator } from "./types";

/**
 * Most of the RNGs actual produce values from 0 to 2^96,
 * which is too many ids for the number of bridge deals.
 * So this tries 100 times to get a valid one, then throws
 * an error if it fails.
 */
export function multipleAttempts(
  rng: RandomGenerator,
  numDeals: bigint,
  bits: number
): bigint {
  for (let i = 0; i < 100; i++) {
    const id = rng(bits);
    if (id >= 0 && id < numDeals) {
      return id;
    }
  }

  throw new Error(
    "We failed to generate a valid random id 100 times, " +
      "this should have a very low probability. This suggests " +
      "the number of requested bits is much higher than the number of deals."
  );
}
