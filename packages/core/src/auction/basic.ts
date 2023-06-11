import { BIDS_PER_LEVEL } from '../bridge-constants';
import { Bid, Call, NoTrump, NoTrumpType, Suit } from '../types';
import { findOrThrow } from '../utils/object';

const BIDDABLE_SUIT_TO_NUMBER: Record<Suit | NoTrumpType, number> = {
	[Suit.Club]: 0,
	[Suit.Diamond]: 1,
	[Suit.Heart]: 2,
	[Suit.Spade]: 3,
	[NoTrump]: 4,
};

/**
 * This is simply a Type-Guard function, it does not check the bid is actually valid.
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */
export function isBid(call: Call): call is Bid {
	return (call as Bid).suit !== undefined;
}

/**
 * Convert a biddable suit (NT, S, H, D, C) into a number
 */
export function biddableSuitToNumber(suit: Suit | NoTrumpType): number {
	return findOrThrow(
		BIDDABLE_SUIT_TO_NUMBER,
		suit,
		`Unexpected biddable suit: ${suit}`
	);
}

/**
 * Convert an actual bid into a number
 */
export function bidToNumber(bid: Bid): number {
	return (bid.level - 1) * BIDS_PER_LEVEL + biddableSuitToNumber(bid.suit);
}
