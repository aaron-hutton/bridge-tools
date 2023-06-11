import { equalCard } from '../card';
import { Card, Hand } from '../types';

/**
 * Checks if the given hand contains the given card
 * @param hand The hand to check against
 * @param card The card to check
 * @returns True, if the hand contains the card
 */
export function containsCard(hand: Hand, card: Card) {
	for (const c of hand) {
		if (equalCard(c, card)) {
			return true;
		}
	}

	return false;
}
