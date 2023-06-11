import { Suit } from '../types';
import { findOrThrow } from '../utils/object';

const STRING_SUIT_TO_SUIT = {
	S: Suit.Spade,
	s: Suit.Spade,
	H: Suit.Heart,
	h: Suit.Heart,
	D: Suit.Diamond,
	d: Suit.Diamond,
	C: Suit.Club,
	c: Suit.Club,
};

/**
 * Parse a single suit
 * @param str The string for a single suit
 * @returns The suit or an error if it cannot be parsed
 */
export function parseSuit(str: string): Suit {
	return findOrThrow<string, Suit>(
		STRING_SUIT_TO_SUIT,
		str,
		`Failed to parse suit with string: ${str}`
	);
}
