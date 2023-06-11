import { stringifyCall } from '.';
import { AuctionCall, PossibleCalls } from '../types';
/**
 * Converts a list of calls in a contested auction to a string separated by -
 * @param auction List of calls in auction
 * @returns String representation of auction
 */
function stringifyContestedAuction(auction: AuctionCall[]): string {
	const stringAuction = auction.map((call) => stringifyCall(call));
	return stringAuction.join('-');
}
/**
 * Takes an auction in which 1 side passes throughout and returns a string of an uncontested auction
 * @param auction List of calls in auction
 * @returns String representation of auction
 */
function stringifyUncontestedAuction(auction: AuctionCall[]): string {
	const passes = auction.filter((pass, index) => {
		return index % 2 === 1;
	});
	// console.log('Passes', passes);
	const bids = auction.filter((bid, index) => {
		return index % 2 === 0;
	});
	// console.log('Bids', bids);
	for (let i = 0; i < passes.length; i++) {
		if (passes[i].call !== PossibleCalls.Pass) {
			throw new Error(
				`Invalid uncontested auction as opponents don't pass throughout in ${auction}`
			);
		}
	}
	return bids.map((bid) => stringifyCall(bid)).join('-');
}
/**
 * Converts a list of calls in an auction to a string separated by -
 * @param auction List of calls in auction
 * @param contested Check if auction is contested or uncontested
 * @returns String representation of auction
 */
export function stringifyAuction(
	auction: AuctionCall[],
	contested = true
): string {
	return contested
		? stringifyContestedAuction(auction)
		: stringifyUncontestedAuction(auction);
}
