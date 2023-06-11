import { Hand } from '../types';
import { exactDistribution } from './exact-distribution';

/**
 * This can be used to measure the distribution of the hand.
 * It will return an ordered list of the lengths of the suits
 * in the hand
 * @param hand The hand to measure the distribution of
 * @returns The ordered list of the length of the suits
 */
export function distribution(hand: Hand) {
	// We have to pass a sorting function otherwise it sorts lexicographically
	// This means hands with 10+ suits end up ordered wrong
	return exactDistribution(hand)
		.sort((a, b) => a - b)
		.reverse();
}
