import { BIG_INTEGER_2_32 } from '../constants';
import { RandomGenerator } from '../random';
import { multipleAttempts } from './multiple-attempts';

/**
 * This random generator should be used in browsers, it should be cryptographically secure, so can be used tournament dealing.
 * This has not been checked, however, and therefore should be used for tournaments at your own risk.
 *
 * This calls Crypto.getRandomValues to generate 3 32 bit integers, converts them to bigints, bitshifts by 64, 32 and 0
 * respectively and sums them.
 */
export const BrowserCryptoRandomNumberGenerator: RandomGenerator = () => {
	return multipleAttempts(() => {
		const values = new Uint32Array(3);
		//@ts-expect-error
		window.crypto.getRandomValues(values);

		const rand1 = BigInt(values[0]) * BIG_INTEGER_2_32 * BIG_INTEGER_2_32;
		const rand2 = BigInt(values[1]) * BIG_INTEGER_2_32;
		const rand3 = BigInt(values[2]);

		return rand1 + rand2 + rand3;
	});
};
