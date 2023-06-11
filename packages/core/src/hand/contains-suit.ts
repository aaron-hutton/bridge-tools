import { countSuit } from '.';
import { Hand, Suit } from '../types';

/**
 * Checks if the given hand contains any cards which have the given suit
 * @param hand The hand to check against
 * @param suit The suit to check for cards in
 * @returns True, if the hand contains at least one card within that suit
 */
export function containsSuit(hand: Hand, suit: Suit) {
	return countSuit(hand, suit) > 0;
}
