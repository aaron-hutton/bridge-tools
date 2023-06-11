import { parseSuit } from '.';
import { Types } from '..';
import { LARGEST_BID_LEVEL } from '../bridge-constants';
import { AuctionCall, NoTrumpType, PossibleCalls } from '../types';

/**
 * Checks strain of bid for NT or a suit
 * @param str Letter denoting suit or NT
 * @returns NT or Suit type
 */
function parseStrain(str: string): Types.Suit | NoTrumpType {
	return str === 'n' || str === 'N' || str === 'nt' || str === 'NT'
		? Types.NoTrump
		: parseSuit(str);
}

/**
 * Parses a single call in an auction. It can either be a bid or a call
 * @param bid A string of the call to be parsed.
 * @returns AuctionCall.call object or an error if it can't be parsed
 */

export function parseCall(bid: string): AuctionCall {
	switch (bid.toUpperCase()) {
		case 'P': {
			return { call: PossibleCalls.Pass };
		}
		case 'X': {
			return { call: PossibleCalls.Double };
		}
		case 'XX': {
			return { call: PossibleCalls.Redouble };
		}
	}
	const level = Number.parseInt(bid);
	const strain = bid.slice(1);
	if (level > 0 && level <= LARGEST_BID_LEVEL) {
		return { call: { level, suit: parseStrain(strain) } };
	} else {
		throw new Error(`Failed to parse Call with string: ${bid}`);
	}
}
