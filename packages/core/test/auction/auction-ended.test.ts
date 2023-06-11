import { Auction, Types } from '../../src';

const auction: Types.AuctionCall[] = [
	{ call: { level: 1, suit: Types.Suit.Spade } },
	{ call: Types.PossibleCalls.Pass },
	{ call: { level: 2, suit: Types.Suit.Spade } },
	{ call: Types.PossibleCalls.Pass },
	{ call: { level: 4, suit: Types.Suit.Spade } },
	{ call: Types.PossibleCalls.Pass },
	{ call: Types.PossibleCalls.Pass },
	{ call: Types.PossibleCalls.Pass },
];

describe('Testing Auction.isAuctionEnded', () => {
	it('Testing true with a completed auction', () => {
		expect(Auction.isAuctionEnded(auction)).toBeTruthy();
	});

	it('Testing false with an uncompleted auction', () => {
		expect(Auction.isAuctionEnded(auction.slice(0, -1))).toBeFalsy();
	});

	it('Testing true with a passout', () => {
		expect(
			Auction.isAuctionEnded([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeTruthy();
	});

	it('Testing false with three initial passes', () => {
		expect(
			Auction.isAuctionEnded([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeFalsy();
	});
});
