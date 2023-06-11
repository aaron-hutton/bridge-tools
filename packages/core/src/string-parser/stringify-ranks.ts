import { compareRank } from '../card';
import { Rank } from '../types';

/**
 * Convert a list of ranks into a string. The ranks do not need to be in order.
 * @param ranks The list of ranks to be converted
 * @returns A string representing the list of ranks
 */
export function stringifyRanks(ranks: Rank[]): string {
	const orderedRanks = ranks.sort(compareRank).reverse();
	return orderedRanks.join('');
}
