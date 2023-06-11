import { equalCard } from '../card';
import { Card, Hand } from '../types';

/**
 * Removes the card from the hand. The original array will not be modified.
 * @param hand The hand to remove a card from
 * @param card The card to be removed
 * @param throwErrorOnMissing Whether to throw an error if the card to remove doesn't exist
 * @returns The hand with the card removed
 */
export function removeCard(hand: Hand, card: Card, throwErrorOnMissing = true) {
	const result = hand.filter((c) => !equalCard(c, card));

	if (throwErrorOnMissing && result.length === hand.length) {
		throw new Error(
			`Tried to remove card: ${card} but it wasn't in the hand.`
		);
	}

	return result;
}
