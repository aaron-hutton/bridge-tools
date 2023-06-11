import { countConsecutivePasses, isBid } from '.';
import { AuctionCall } from '../types';

/**
 * Returns true if a double is a valid call at given index
 *
 * @param auction The auction to check against
 * @param index The index to check at
 * @returns True, if a double would be valid at that index
 */
export function isDoubleValid(auction: AuctionCall[], index: number): boolean {
	const consecutivePasses = countConsecutivePasses(auction, index);
	if (consecutivePasses !== 0 && consecutivePasses !== 2) {
		return false;
	}

	// Check that the last non-pass in the auction was a bid
	if (
		index - 1 - consecutivePasses < 0 ||
		!isBid(auction[index - 1 - consecutivePasses].call)
	) {
		return false;
	}

	return true;
}

/**
 * Returns true if a double is a valid call as the next call in the auction
 *
 * @param auction The auction to check against
 * @returns True, if a double would be valid at this point
 */
export function isFinalDoubleValid(auction: AuctionCall[]): boolean {
	return isDoubleValid(auction, auction.length);
}
