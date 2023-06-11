import { isAuctionEnded, isBid } from '.';
import { isSamePair, rotateClockwise } from '../board';
import { AuctionCall, Compass, Contract, PossibleCalls } from '../types';
import { calculateRecentBid } from './calculate-recent-bid';

/**
 * Calculate the contract for a given auction. We assume the auction is valid.
 * If necessary this should be checked with the auctionValid function.
 *
 * We first calculate the most recent bid, then whether it's doubled/redoubled, then
 * go back to the start and work out who declarer is.
 * @param auction The auction to calculate the contract for
 * @param dealer The compass direction of the dealer, so declarer can be calculated
 * @returns The contract for the auction, or null if it is unfinished.
 */
export function calculateContract(
	auction: AuctionCall[],
	dealer: Compass
): Contract | null {
	if (!isAuctionEnded(auction)) {
		return null;
	}

	const finalBid = calculateRecentBid(auction);
	if (finalBid === null) {
		return 'Passout';
	}

	// Find out if it's doubled/redoubled
	let doubled = false;
	let redoubled = false;

	for (let i = auction.length - 1; i >= 0; i--) {
		const call = auction[i].call;
		if (call === PossibleCalls.Double) {
			doubled = true;
			break;
		} else if (call === PossibleCalls.Redouble) {
			redoubled = true;
			break;
		} else if (isBid(call)) {
			break;
		}
	}

	const finalBidderDirection = rotateClockwise(dealer, finalBid.index);
	let declarer = Compass.North;
	for (let i = 0; i < auction.length; i++) {
		const call = auction[i].call;
		const direction = rotateClockwise(dealer, i);
		if (
			isBid(call) &&
			call.suit === finalBid.bid.suit &&
			isSamePair(direction, finalBidderDirection)
		) {
			declarer = direction;
			break;
		}
	}

	return {
		declarer,
		level: finalBid.bid.level,
		strain: finalBid.bid.suit,
		...(doubled ? { doubled } : {}),
		...(redoubled ? { redoubled } : {}),
	};
}
