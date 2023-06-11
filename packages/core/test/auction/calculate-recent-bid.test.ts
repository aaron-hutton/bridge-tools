import { Auction, Types } from '../../src';
import { PossibleCalls } from '../../src/types';

describe('Testing Auction.calculateRecentBid', () => {
	it('Testing on empty auction', () => {
		expect(Auction.calculateRecentBid([])).toBeNull();
	});

	it('Testing on single bid auction', () => {
		expect(
			Auction.calculateRecentBid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
			])
		).toStrictEqual({
			bid: { level: 1, suit: Types.Suit.Spade },
			index: 0,
		});
	});

	it('Testing on multi bid auction', () => {
		expect(
			Auction.calculateRecentBid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: { level: 2, suit: Types.Suit.Heart } },
				{ call: { level: 2, suit: Types.Suit.Spade } },
			])
		).toStrictEqual({
			bid: { level: 2, suit: Types.Suit.Spade },
			index: 2,
		});
	});

	it('Testing on with passes/x/xx ', () => {
		expect(
			Auction.calculateRecentBid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: PossibleCalls.Pass },
				{ call: { level: 2, suit: Types.Suit.Spade } },
				{ call: PossibleCalls.Double },
				{ call: { level: 3, suit: Types.Suit.Club } },
				{ call: PossibleCalls.Double },
				{ call: { level: 4, suit: Types.Suit.Spade } },
				{ call: PossibleCalls.Pass },
				{ call: PossibleCalls.Pass },
				{ call: PossibleCalls.Pass },
			])
		).toStrictEqual({
			bid: { level: 4, suit: Types.Suit.Spade },
			index: 6,
		});
	});
});

describe('Testing Auction.calculateRecentBidForIndex', () => {
	it('Testing in the middle of the auction', () => {
		expect(
			Auction.calculateRecentBidForIndex(
				[
					{ call: { level: 1, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Pass },
					{ call: { level: 2, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Double },
					{ call: { level: 3, suit: Types.Suit.Club } },
					{ call: PossibleCalls.Double },
					{ call: { level: 4, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
				],
				5
			)
		).toStrictEqual({ bid: { level: 3, suit: Types.Suit.Club }, index: 4 });
	});
});
