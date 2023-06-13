import { RandomGenerator } from '..';
import { NUMBER_OF_DEALS } from '../constants';

/**
 * Most of the RNGs actual produce values from 0 to 2^96,
 * which is too many ids for the number of bridge deals.
 * So this tries 100 times to get a valid one, then throws
 * an error if it fails.
 */
export function multipleAttempts(rng: RandomGenerator): bigint {
	for (let i = 0; i < 100; i++) {
		const id = rng();
		if (id >= 0 && id < NUMBER_OF_DEALS) {
			return id;
		}
	}

	throw new Error(
		'We failed to generate a valid random id 100 times, ' +
			'this has approx a 1 in 3^100 chance, ' +
			'so something is probably wrong with the RNG source.'
	);
}
