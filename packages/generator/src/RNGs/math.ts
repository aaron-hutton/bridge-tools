import { BIG_INTEGER_2_32, INTEGER_2_32 } from '../constants';
import { RandomGenerator } from '../random';
import { multipleAttempts } from './multiple-attempts';

/**
 * This random generator should be used for quick dealing, such as during simulations. Most implementations
 * of Math.random are not cryptographically secure, but they are normally fast.
 *
 * This generates 3 32 bit integers, converts them to bigints, bitshifts them by 64, 32 and 0
 * respectively and sums them.
 */
export const MathRandomNumberGenerator: RandomGenerator = () => {
	return multipleAttempts(() => {
		const rand1 = Math.floor(Math.random() * INTEGER_2_32);
		const rand2 = Math.floor(Math.random() * INTEGER_2_32);
		const rand3 = Math.floor(Math.random() * INTEGER_2_32);

		const bRand1 = BigInt(rand1) * BIG_INTEGER_2_32 * BIG_INTEGER_2_32;
		const bRand2 = BigInt(rand2) * BIG_INTEGER_2_32;
		const bRand3 = BigInt(rand3);

		return bRand1 + bRand2 + bRand3;
	});
};
