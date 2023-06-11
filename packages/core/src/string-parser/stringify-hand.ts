import { stringifyRanks } from '.';
import { Hand, Suit } from '../types';

/**
 * Convert a hand into a string
 * @param hand The hand to be converted
 * @returns A string representing the given hand
 */
export function stringifyHand(hand: Hand): string {
	const spadeStr = stringifyRanks(
		hand.filter((c) => c.suit === Suit.Spade).map((c) => c.rank)
	);
	const heartStr = stringifyRanks(
		hand.filter((c) => c.suit === Suit.Heart).map((c) => c.rank)
	);
	const diamondStr = stringifyRanks(
		hand.filter((c) => c.suit === Suit.Diamond).map((c) => c.rank)
	);
	const clubStr = stringifyRanks(
		hand.filter((c) => c.suit === Suit.Club).map((c) => c.rank)
	);

	return spadeStr + '.' + heartStr + '.' + diamondStr + '.' + clubStr;
}
