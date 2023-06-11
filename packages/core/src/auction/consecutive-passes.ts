import { AuctionCall, PossibleCalls } from '../types';

/**
 * Count the number of consecutive passes back from a specific call of an auction
 *
 * @param auction The auction
 * @param start The index of the call to count back from. This can range from 0 to auction.length inclusive.
 * @returns The number of consecutive passes
 */
export function countConsecutivePasses(
	auction: AuctionCall[],
	start: number
): number {
	let passes = 0;
	for (let i = start - 1; i >= 0; i--) {
		if (auction[i].call !== PossibleCalls.Pass) {
			return passes;
		}
		passes += 1;
	}
	return passes;
}

/**
 * Count the number of consecutive passes back from the end of the auction
 *
 * @param auction The auction
 * @returns The number of consecutive passes at the end
 */
export function countFinalConsecutivePasses(auction: AuctionCall[]): number {
	return countConsecutivePasses(auction, auction.length);
}
