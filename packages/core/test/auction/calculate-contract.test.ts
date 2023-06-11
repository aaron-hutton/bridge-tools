import { Auction, Types } from '../../src';
import { Compass, PossibleCalls } from '../../src/types';

describe('Testing Auction.calculateContract', () => {
	it('Testing on empty auction', () => {
		expect(Auction.calculateContract([], Compass.North)).toBeNull();
	});

	it('Testing on passout', () => {
		expect(
			Auction.calculateContract(
				[
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
				],
				Compass.North
			)
		).toStrictEqual('Passout');
	});

	it('Testing on simple auction', () => {
		expect(
			Auction.calculateContract(
				[
					{ call: { level: 1, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Pass },
					{ call: { level: 2, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
				],
				Types.Compass.North
			)
		).toStrictEqual({
			declarer: Compass.North,
			level: 2,
			strain: Types.Suit.Spade,
		});
	});

	it('Testing doubled', () => {
		expect(
			Auction.calculateContract(
				[
					{ call: { level: 1, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Pass },
					{ call: { level: 2, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Double },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
				],
				Types.Compass.North
			)
		).toStrictEqual({
			declarer: Compass.North,
			level: 2,
			strain: Types.Suit.Spade,
			doubled: true,
		});
	});

	it('Testing redoubled', () => {
		expect(
			Auction.calculateContract(
				[
					{ call: { level: 1, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Pass },
					{ call: { level: 2, suit: Types.Suit.Spade } },
					{ call: PossibleCalls.Double },
					{ call: PossibleCalls.Redouble },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
				],
				Types.Compass.North
			)
		).toStrictEqual({
			declarer: Compass.North,
			level: 2,
			strain: Types.Suit.Spade,
			redoubled: true,
		});
	});

	it('Testing with first time suit bid by other side', () => {
		expect(
			Auction.calculateContract(
				[
					{ call: { level: 1, suit: Types.Suit.Club } },
					{ call: { level: 2, suit: Types.Suit.Club } },
					{ call: PossibleCalls.Pass },
					{ call: { level: 2, suit: Types.NoTrump } },
					{ call: PossibleCalls.Pass },
					{ call: { level: 3, suit: Types.Suit.Club } },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
				],
				Types.Compass.North
			)
		).toStrictEqual({
			declarer: Compass.East,
			level: 3,
			strain: Types.Suit.Club,
		});
	});

	it('Testing a double earlier in the auction does not cause the result to be doubled', () => {
		expect(
			Auction.calculateContract(
				[
					{ call: { level: 1, suit: Types.Suit.Club } },
					{ call: PossibleCalls.Double },
					{ call: { level: 2, suit: Types.Suit.Club } },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
					{ call: PossibleCalls.Pass },
				],
				Types.Compass.North
			)
		).toStrictEqual({
			declarer: Compass.North,
			level: 2,
			strain: Types.Suit.Club,
		});
	});
});
