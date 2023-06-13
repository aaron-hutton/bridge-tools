import { Constants, RandomGenerator, RNG } from "@bridge-tools/generator";
import { randomInt } from "crypto";

/**
 * This random generator should be used in node, it should be cryptographically secure, so can be used tournament dealing.
 * This has not been checked, however, and therefore should be used for tournaments at your own risk.
 *
 * This calls Crypto.getRandomValues to generate 3 32 bit integers, converts them to bigints, bitshifts by 64, 32 and 0
 * respectively and sums them.
 */
export const NodeCryptoRandomNumberGenerator: RandomGenerator = () => {
  return RNG.multipleAttempts(() => {
    const rand1 = randomInt(Constants.INTEGER_2_32);
    const rand2 = randomInt(Constants.INTEGER_2_32);
    const rand3 = randomInt(Constants.INTEGER_2_32);

    const bRand1 =
      BigInt(rand1) * Constants.BIG_INTEGER_2_32 * Constants.BIG_INTEGER_2_32;
    const bRand2 = BigInt(rand2) * Constants.BIG_INTEGER_2_32;
    const bRand3 = BigInt(rand3);

    return bRand1 + bRand2 + bRand3;
  });
};
