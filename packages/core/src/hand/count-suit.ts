import { cardToNumber } from '../card';
import { Hand, Rank, Suit } from '../types';

/**
 * Count the number of cards of a given suit are in a given hand
 * @param hand The hand to count against
 * @param suit The suit to check for cards in
 * @returns The number of cards in the hand with that suit
 */
export function countSuit(hand: Hand, suit: Suit) {
	const minCardNumber = cardToNumber({ rank: Rank.Ace, suit });
	const maxCardNumber = cardToNumber({ rank: Rank.Two, suit });

	let count = 0;
	for (const card of hand) {
		const number = cardToNumber(card);
		if (number >= minCardNumber && number <= maxCardNumber) {
			count++;
		}
	}

	return count;
}
