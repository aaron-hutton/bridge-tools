import { compareRank } from '.';
import { Card, NoTrumpType, Suit } from '../types';

/**
 * Compare the two cards, return 0 if they are equal and -1 is
 * card2 is before card1 and 1 otherwise.
 *
 * Because cards earlier in a trick set the suit for that trick,
 * if the two cards are of different suits and neither is trumps,
 * then return 1. This makes the function non-symmetric,
 * so handle this case with care.
 *
 * @param card1
 * @param card2
 * @param trumpSuit The suit to use as trumps, undefined indicates this is notrump
 * @returns The comparison of the cards
 */
export function compare(
	card1: Card,
	card2: Card,
	trumpSuit?: Suit | NoTrumpType
): number {
	if (card1.suit === card2.suit) {
		return compareRank(card1.rank, card2.rank);
	}

	if (card1.suit === trumpSuit) {
		return 1;
	}

	if (card2.suit === trumpSuit) {
		return -1;
	}

	return 1;
}
