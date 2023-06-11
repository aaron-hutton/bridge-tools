import { Auction, Types } from '../../src';

describe('Testing Auction.isFinalDoubleValid', () => {
	it('Testing true with 0 passes', () => {
		expect(
			Auction.isFinalDoubleValid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
			])
		).toBeTruthy();
	});

	it('Testing false with 1 pass', () => {
		expect(
			Auction.isFinalDoubleValid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeFalsy();
	});

	it('Testing true with 2 passes', () => {
		expect(
			Auction.isFinalDoubleValid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeTruthy();
	});

	it('Testing false with empty auction', () => {
		expect(Auction.isFinalDoubleValid([])).toBeFalsy();
	});

	it('Testing false with only passes', () => {
		expect(
			Auction.isFinalDoubleValid([{ call: Types.PossibleCalls.Pass }])
		).toBeFalsy();

		expect(
			Auction.isFinalDoubleValid([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeFalsy();

		expect(
			Auction.isFinalDoubleValid([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeFalsy();
	});
});

describe('Testing Auction.isDoubleValid', () => {
	it('Testing in the middle of the auction', () => {
		expect(
			Auction.isDoubleValid(
				[
					{ call: { level: 1, suit: Types.Suit.Spade } },
					{ call: Types.PossibleCalls.Pass },
					{ call: Types.PossibleCalls.Pass },
					{ call: Types.PossibleCalls.Pass },
				],
				2
			)
		).toBeFalsy();
	});
});
