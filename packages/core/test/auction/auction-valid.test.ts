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

const doubleAuction: Types.AuctionCall[] = [
	{ call: { level: 1, suit: Types.Suit.Spade } },
	{ call: Types.PossibleCalls.Double },
];

const redoubleAuction: Types.AuctionCall[] = [
	{ call: { level: 1, suit: Types.Suit.Spade } },
	{ call: Types.PossibleCalls.Double },
	{ call: Types.PossibleCalls.Redouble },
];

describe('Testing Auction.isAuctionValid', () => {
	it('Testing true with a valid complete auction', () => {
		expect(Auction.isAuctionValid(auction)).toBeTruthy();
	});

	it('Testing true with a valid incomplete auction', () => {
		expect(Auction.isAuctionValid(auction.slice(0, -3))).toBeTruthy();
	});

	it('Testing true with a valid double', () => {
		expect(Auction.isAuctionValid(doubleAuction)).toBeTruthy();
	});

	it('Testing false with an invalid double', () => {
		expect(
			Auction.isAuctionValid([{ call: Types.PossibleCalls.Double }])
		).toBeFalsy();
	});

	it('Testing true with a valid redouble', () => {
		expect(Auction.isAuctionValid(redoubleAuction)).toBeTruthy();
	});

	it('Testing false with an invalid redouble', () => {
		expect(
			Auction.isAuctionValid([{ call: Types.PossibleCalls.Redouble }])
		).toBeFalsy();
	});

	it('Testing false with an out-of-order auction', () => {
		expect(
			Auction.isAuctionValid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: { level: 1, suit: Types.Suit.Heart } },
			])
		).toBeFalsy();
	});

	it('Testing true with a passout', () => {
		expect(
			Auction.isAuctionValid([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeTruthy();
	});

	it('Testing false with 5 consecutive passes', () => {
		expect(
			Auction.isAuctionValid([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeFalsy();
	});

	it('Testing false with an invalid bid', () => {
		expect(
			Auction.isAuctionValid([
				{ call: { level: 0, suit: Types.NoTrump } },
			])
		).toBeFalsy();

		expect(
			Auction.isAuctionValid([
				{ call: { level: 8, suit: Types.NoTrump } },
			])
		).toBeFalsy();
	});
});
