import { Trick, Types } from '../../src';

describe('Testing Trick.evaluate', () => {
	it('Testing a normal NT trick', () => {
		const trick: Types.Trick = [
			{ rank: Types.Rank.Jack, suit: Types.Suit.Spade },
			{ rank: Types.Rank.Queen, suit: Types.Suit.Spade },
			{ rank: Types.Rank.King, suit: Types.Suit.Spade },
			{ rank: Types.Rank.Ace, suit: Types.Suit.Spade },
		];

		expect(Trick.evaluate(trick, Types.Compass.North)).toStrictEqual(
			Types.Compass.West
		);
	});

	it('Testing a trump trick', () => {
		const trick: Types.Trick = [
			{ rank: Types.Rank.Jack, suit: Types.Suit.Spade },
			{ rank: Types.Rank.Queen, suit: Types.Suit.Spade },
			{ rank: Types.Rank.King, suit: Types.Suit.Spade },
			{ rank: Types.Rank.Two, suit: Types.Suit.Heart },
		];

		expect(
			Trick.evaluate(trick, Types.Compass.West, Types.Suit.Heart)
		).toStrictEqual(Types.Compass.South);
	});

	it('Testing a length NT trick', () => {
		const trick: Types.Trick = [
			{ rank: Types.Rank.Two, suit: Types.Suit.Spade },
			{ rank: Types.Rank.Ace, suit: Types.Suit.Heart },
			{ rank: Types.Rank.Ace, suit: Types.Suit.Diamond },
			{ rank: Types.Rank.Ace, suit: Types.Suit.Club },
		];

		expect(Trick.evaluate(trick, Types.Compass.North)).toStrictEqual(
			Types.Compass.North
		);
	});

	it('Testing an invalid trick', () => {
		const trick: Types.Trick = [
			{ rank: Types.Rank.Two, suit: Types.Suit.Spade },
		];

		expect(() => Trick.evaluate(trick, Types.Compass.North)).toThrowError();
	});
});
