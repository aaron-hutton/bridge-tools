import { countConsecutivePasses } from '.';
import { AuctionCall, PossibleCalls } from '../types';

/**
 * Returns true if a redouble is a valid call at given index
 *
 * @param auction The auction to check against
 * @param index The index to check at
 * @returns True, if a redouble would be valid at that index
 */
export function isRedoubleValid(
	auction: AuctionCall[],
	index: number
): boolean {
	const consecutivePasses = countConsecutivePasses(auction, index);
	if (consecutivePasses !== 0 && consecutivePasses !== 2) {
		return false;
	}

	// Check that the last non-pass in the auction was a double
	if (
		index - 1 - consecutivePasses < 0 ||
		auction[index - 1 - consecutivePasses].call !== PossibleCalls.Double
	) {
		return false;
	}

	return true;
}

/**
 * Returns true if a redouble is a valid call as the next call in the auction
 *
 * @param auction The auction to check against
 * @returns True, if a redouble would be valid at this point
 */
export function isFinalRedoubleValid(auction: AuctionCall[]): boolean {
	return isRedoubleValid(auction, auction.length);
}
