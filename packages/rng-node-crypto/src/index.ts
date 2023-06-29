import { type RandomGenerator } from "@bridge-tools/generator";
import { randomInt } from "crypto";

/**
 * This random generator should be used in node, it should be cryptographically secure, so can be used tournament dealing.
 * This has not been checked, however, and therefore should be used for tournaments at your own risk.
 *
 * This calls Crypto.getRandomValues to generate 3 32 bit integers, converts them to bigints, bitshifts by 64, 32 and 0
 * respectively and sums them.
 */
export const NodeCryptoRandomNumberGenerator: RandomGenerator = (
  bits: number
) => {
  if (bits > 96) {
    throw new Error(
      "This RNG was only designed to provide up to 96 bits of randomness"
    );
  }

  if (bits <= 48) {
    const rand = randomInt(2 ** 48);
    return BigInt(Math.floor(rand));
  } else {
    const rand1 = randomInt(2 ** (bits - 48));
    const rand2 = randomInt(2 ** 48);

    const rand1BI = BigInt(Math.floor(rand1)) << 48n;
    const rand2BI = BigInt(Math.floor(rand2));

    return rand1BI + rand2BI;
  }
};
