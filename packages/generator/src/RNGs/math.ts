import { type RandomGenerator } from "../types";

/**
 * This random generator should be used for quick dealing, such as during simulations. Most implementations
 * of Math.random are not cryptographically secure, but they are normally fast.
 *
 * This generates as many 1 or 2 48 bit integers as it needs before converting them to bigints,
 * bitshifting them and summing them.
 */
export const MathRandomNumberGenerator: RandomGenerator = (bits: number) => {
  if (bits > 96) {
    throw new Error(
      "This RNG was only designed to provide up to 96 bits of randomness"
    );
  }

  if (bits <= 48) {
    const rand = Math.random() * 2 ** bits;
    return BigInt(Math.floor(rand));
  } else {
    const rand1 = Math.random() * 2 ** (bits - 48);
    const rand2 = Math.random() * 2 ** 48;

    const rand1BI = BigInt(Math.floor(rand1)) << 48n;
    const rand2BI = BigInt(Math.floor(rand2));

    return rand1BI + rand2BI;
  }
};
