import { Hand } from '../types';

/**
 * Deep copies a hand, so there are no remaining references to the original list or cards
 *
 * @param hand The hand to be copied
 * @returns A new copy of the hand which can be modified without modifying the original
 */
export function clone(hand: Hand) {
	return hand.map((card) => ({ suit: card.suit, rank: card.rank }));
}
