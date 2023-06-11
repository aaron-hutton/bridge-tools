import { countFinalConsecutivePasses } from '.';
import { AuctionCall } from '../types';

/**
 * Check if the auction has ended yet, doesn't check the validity of the auction itself
 *
 * @param auction The auction to check against
 * @returns True, if the auction has 3 consecutive passes
 */
export function isAuctionEnded(auction: AuctionCall[]): boolean {
	// Handle 3 initial passes
	if (auction.length < 4) {
		return false;
	}

	return countFinalConsecutivePasses(auction) >= 3;
}
