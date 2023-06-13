import { Types } from '@bridge-tools/core';
import { decodeDeal, RandomGenerator, RNG } from '.';

export interface GenerateDealOptions {
	/**
	 * The number of deals to generate
	 * @default 1
	 */
	num?: number;

	/**
	 * The random number generator to use
	 * @default MathRandomNumberGenerator
	 */
	rng?: RandomGenerator;

	/**
	 * The filter to be applied to the deals
	 * @default None
	 */
	filter?: (d: Types.Deal) => boolean;

	/**
	 * The maximum number of attempts per deal to generate a hand satisfying the filters.
	 * Going over this number suggests the constraints are too restrictive and should be
	 * simplified. This number can be made larger if specific constraints are required
	 * but this may make the generation very slow.
	 * @default 1000
	 */
	maxAttempts?: number;
}

/**
 * This generates a set of deals using the supplied RNG and by applying the given filter.
 * @param options The deal generation options
 * @returns A list of randomly generated deals with length equal to options.num
 */
export function generateDeals({
	num = 1,
	rng = RNG.MathRandomNumberGenerator,
	filter = (() => true) as (d: Types.Deal) => boolean,
	maxAttempts = 1000,
}): Types.Deal[] {
	const deals: Types.Deal[] = [];

	for (let i = 0; i < num; i++) {
		let foundDeal = false;
		for (let attempt = 0; attempt < maxAttempts; attempt++) {
			const randomId = rng();
			const deal = decodeDeal(randomId);

			if (filter(deal)) {
				foundDeal = true;
				deals.push(deal);
				break;
			}
		}

		if (!foundDeal) {
			throw new Error(
				`Failed to generate a deal within ${maxAttempts} attempts. ` +
					`Try simplifying the constraints or increasing the maxAttempts argument.`
			);
		}
	}
	return deals;
}
