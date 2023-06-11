import { cardToNumber } from '../card';
import { Hand } from '../types';

/**
 * Sorts a hand into suits (S, H, D, C), then by rank within each suit.
 * @param hand The hand to be sorted
 * @returns A sorted hand
 */
export function sort(hand: Hand): Hand {
	return hand.sort((c1, c2) => cardToNumber(c1) - cardToNumber(c2));
}
