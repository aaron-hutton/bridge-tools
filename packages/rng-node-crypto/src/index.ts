import { type RandomGenerator } from "@bridge-tools/generator";
import { randomInt } from "crypto";

const RANDOM_SIZE = 47;

/**
 * This random generator should be used in node, it should be cryptographically secure, so can be used tournament dealing.
 * This has not been checked, however, and therefore should be used for tournaments at your own risk.
 *
 * This calls Crypto.getRandomValues to generate numbers up to 47 bits in size (max input to randomInt is 2^48-1)
 */
export const NodeCryptoRandomNumberGenerator: RandomGenerator = (
  bits: number
) => {
  let result = 0n;
  for (let offset = 0; offset < bits; offset += RANDOM_SIZE) {
    const size = Math.min(bits - offset, RANDOM_SIZE);

    const rand = randomInt(2 ** size);
    result += BigInt(rand) << BigInt(offset);
  }

  return result;
};
