import { isBid } from '.';
import { AuctionCall, Bid } from '../types';

/**
 * Calculates the most recent bid in the auction, this can
 * then be used when building bidding boxes to ensure there are
 * no invalid bids.
 *
 * @param auction The auction to check against
 * @param index The index to begin checking back from
 * @returns An object which contains the most recent bid (not call) with the index it occurs or null if nothing has been bid
 */
export function calculateRecentBidForIndex(
	auction: AuctionCall[],
	index: number
): { bid: Bid; index: number } | null {
	for (let i = index; i >= 0; i--) {
		const call = auction[i].call;
		if (isBid(call)) {
			return { bid: call, index: i };
		}
	}

	return null;
}

/**
 * Calculates the most recent bid in the auction, this can
 * then be used when building bidding boxes to ensure there are
 * no invalid bids.
 *
 * @param auction The auction to check against
 * @returns An object which contains the most recent bid (not call) with the index it occurs or null if nothing has been bid
 */
export function calculateRecentBid(
	auction: AuctionCall[]
): { bid: Bid; index: number } | null {
	return calculateRecentBidForIndex(auction, auction.length - 1);
}
