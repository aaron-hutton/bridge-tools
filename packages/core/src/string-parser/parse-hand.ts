import { parseRanks } from '.';
import { CARDS_IN_HAND, NUMBER_OF_SUITS } from '../bridge-constants';
import { Card, Hand, Suit } from '../types';

/**
 * Parse a a string containing a hand into it a list of its cards.
 * The format will be S.H.D.C, e.g. KQT7.KJ3.A65.J98
 * @param str The string representing a hand
 * @param allowPartial Whether to allow hands with fewer than 13 cards
 * 	@default false
 * @returns A Hand of cards or an error if it cannot be parsed
 */
export function parseHand(str: string, allowPartial = false): Hand {
	const suitStrs = str.split('.');
	if (suitStrs.length !== NUMBER_OF_SUITS) {
		throw new Error(`Unexpected number of suits in string: ${str}`);
	}

	const spades: Card[] = parseRanks(suitStrs[0]).map((rank) => ({
		suit: Suit.Spade,
		rank,
	}));
	const hearts: Card[] = parseRanks(suitStrs[1]).map((rank) => ({
		suit: Suit.Heart,
		rank,
	}));
	const diamonds: Card[] = parseRanks(suitStrs[2]).map((rank) => ({
		suit: Suit.Diamond,
		rank,
	}));
	const clubs: Card[] = parseRanks(suitStrs[3]).map((rank) => ({
		suit: Suit.Club,
		rank,
	}));

	if (
		!allowPartial &&
		spades.length + hearts.length + diamonds.length + clubs.length !==
			CARDS_IN_HAND
	) {
		throw new Error(`Incorrect number of cards in string: ${str}`);
	}

	return [...spades, ...hearts, ...diamonds, ...clubs];
}
