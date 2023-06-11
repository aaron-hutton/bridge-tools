import { Auction, Types } from '../../src';

describe('Testing Auction.isFinalRedoubleValid', () => {
	it('Testing true with 0 passes', () => {
		expect(
			Auction.isFinalRedoubleValid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: Types.PossibleCalls.Double },
			])
		).toBeTruthy();
	});

	it('Testing false with 1 pass', () => {
		expect(
			Auction.isFinalRedoubleValid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: Types.PossibleCalls.Double },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeFalsy();
	});

	it('Testing true with 2 passes', () => {
		expect(
			Auction.isFinalRedoubleValid([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: Types.PossibleCalls.Double },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeTruthy();
	});

	it('Testing false with empty auction', () => {
		expect(Auction.isFinalRedoubleValid([])).toBeFalsy();
	});

	it('Testing false with only passes', () => {
		expect(
			Auction.isFinalRedoubleValid([{ call: Types.PossibleCalls.Pass }])
		).toBeFalsy();

		expect(
			Auction.isFinalRedoubleValid([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeFalsy();

		expect(
			Auction.isFinalRedoubleValid([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBeFalsy();
	});
});

describe('Testing Auction.isRedoubleValid', () => {
	it('Testing in the middle of the auction', () => {
		expect(
			Auction.isRedoubleValid(
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
