import { Auction, Types } from '../../src';

describe('Testing Auction.countFinalConsecutivePasses', () => {
	it('Testing on empty auction', () => {
		expect(Auction.countFinalConsecutivePasses([])).toBe(0);
	});

	it('Testing without any passes', () => {
		expect(
			Auction.countFinalConsecutivePasses([
				{ call: { level: 1, suit: Types.Suit.Spade } },
			])
		).toBe(0);
	});

	it('Testing with a bid then passes', () => {
		expect(
			Auction.countFinalConsecutivePasses([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBe(1);

		expect(
			Auction.countFinalConsecutivePasses([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBe(2);

		expect(
			Auction.countFinalConsecutivePasses([
				{ call: { level: 1, suit: Types.Suit.Spade } },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBe(3);
	});

	it('Testing with a only passes', () => {
		expect(
			Auction.countFinalConsecutivePasses([
				{ call: Types.PossibleCalls.Pass },
			])
		).toBe(1);

		expect(
			Auction.countFinalConsecutivePasses([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBe(2);

		expect(
			Auction.countFinalConsecutivePasses([
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
				{ call: Types.PossibleCalls.Pass },
			])
		).toBe(3);
	});
});

describe('Testing Auction.countConsecutivePasses', () => {
	it('Testing in the middle of the auction', () => {
		expect(
			Auction.countConsecutivePasses(
				[
					{ call: { level: 1, suit: Types.Suit.Spade } },
					{ call: Types.PossibleCalls.Pass },
					{ call: Types.PossibleCalls.Pass },
					{ call: Types.PossibleCalls.Pass },
				],
				2
			)
		).toBe(1);
	});
});
