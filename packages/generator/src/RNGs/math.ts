import { type RandomGenerator } from "../types";

const RANDOM_SIZE = 48;

/**
 * This random generator should be used for quick dealing, such as during simulations. Most implementations
 * of Math.random are not cryptographically secure, but they are normally fast.
 *
 * This generates as many 48 bit integers which it then combines in a bigint
 */
export const MathRandomNumberGenerator: RandomGenerator = (bits: number) => {
  let result = 0n;
  for (let offset = 0; offset < bits; offset += RANDOM_SIZE) {
    const size = Math.min(bits - offset, RANDOM_SIZE);
    const rand = Math.random() * 2 ** size;
    result += BigInt(Math.floor(rand)) << BigInt(offset);
  }

  return result;
};
