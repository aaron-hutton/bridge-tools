import {
	bidToNumber,
	isAuctionEnded,
	isBid,
	isDoubleValid,
	isRedoubleValid,
} from '.';
import { AuctionCall, PossibleCalls } from '../types';

/**
 * Check if the auction is valid
 *
 * @param auction The auction to check against
 * @returns True, if the auction contains only valid calls at each point
 */
export function isAuctionValid(auction: AuctionCall[]): boolean {
	let auctionContractNumber = -1;

	for (let i = 0; i < auction.length; i++) {
		const { call } = auction[i];

		if (call === PossibleCalls.Double) {
			if (!isDoubleValid(auction, i)) {
				return false;
			}
		} else if (call === PossibleCalls.Redouble) {
			if (!isRedoubleValid(auction, i)) {
				return false;
			}
		} else if (isBid(call)) {
			if (call.level < 0 || call.level > 7) {
				return false;
			}

			if (bidToNumber(call) > auctionContractNumber) {
				auctionContractNumber = bidToNumber(call);
			} else {
				return false;
			}
		}

		// Check that if the auction has ended that there are no more calls
		if (
			isAuctionEnded(auction.slice(0, i + 1)) &&
			i !== auction.length - 1
		) {
			return false;
		}
	}
	return true;
}
