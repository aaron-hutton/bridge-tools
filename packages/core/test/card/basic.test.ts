import { Card, Types } from '../../src';

describe('Testing Card.suitToNumber', () => {
	it('Testing the correct number when given a suit', () => {
		expect(Card.suitToNumber(Types.Suit.Spade)).toStrictEqual(0);
	});

	it('Testing an exception is thrown when the input is invalid', () => {
		expect(() =>
			Card.suitToNumber('a' as unknown as Types.Suit)
		).toThrowError();
	});
});

describe('Testing Card.numberToSuit', () => {
	it('Testing the correct suit when given a number', () => {
		expect(Card.numberToSuit(0)).toStrictEqual(Types.Suit.Spade);
	});

	it('Testing an exception is thrown when the input is invalid', () => {
		expect(() => Card.numberToSuit(100)).toThrowError();
	});
});

describe('Testing Card.isMinor', () => {
	it('Test', () => {
		expect(Card.isMinor(Types.Suit.Spade)).toBeFalsy();
		expect(Card.isMinor(Types.Suit.Heart)).toBeFalsy();
		expect(Card.isMinor(Types.Suit.Diamond)).toBeTruthy();
		expect(Card.isMinor(Types.Suit.Club)).toBeTruthy();
	});
});

describe('Testing Card.isMajor', () => {
	it('Test', () => {
		expect(Card.isMajor(Types.Suit.Spade)).toBeTruthy();
		expect(Card.isMajor(Types.Suit.Heart)).toBeTruthy();
		expect(Card.isMajor(Types.Suit.Diamond)).toBeFalsy();
		expect(Card.isMajor(Types.Suit.Club)).toBeFalsy();
	});
});

describe('Testing Card.compareRank', () => {
	it('Testing greater', () => {
		expect(Card.compareRank(Types.Rank.Ace, Types.Rank.Two)).toBe(1);
	});
	it('Testing equal', () => {
		expect(Card.compareRank(Types.Rank.Ace, Types.Rank.Ace)).toBe(0);
	});
	it('Testing less', () => {
		expect(Card.compareRank(Types.Rank.Two, Types.Rank.Ace)).toBe(-1);
	});
});

describe('Testing Card.cardToNumber', () => {
	it('Test', () => {
		expect(
			Card.cardToNumber({ rank: Types.Rank.Ace, suit: Types.Suit.Spade })
		).toBe(0);
		expect(
			Card.cardToNumber({ rank: Types.Rank.Two, suit: Types.Suit.Heart })
		).toBe(25);
	});
});

describe('Testing Card.numberToCard', () => {
	it('Testing valid cards', () => {
		expect(Card.numberToCard(0)).toStrictEqual({
			rank: Types.Rank.Ace,
			suit: Types.Suit.Spade,
		});

		expect(Card.numberToCard(25)).toStrictEqual({
			rank: Types.Rank.Two,
			suit: Types.Suit.Heart,
		});
	});

	it('Testing invalid cards', () => {
		expect(() => Card.numberToCard(-1)).toThrowError();
		expect(() => Card.numberToCard(100)).toThrowError();
	});
});

describe('Testing Card.equalCard', () => {
	it('Testing equal', () => {
		expect(
			Card.equalCard(
				{
					rank: Types.Rank.Ace,
					suit: Types.Suit.Spade,
				},
				{
					rank: Types.Rank.Ace,
					suit: Types.Suit.Spade,
				}
			)
		).toBeTruthy();
	});

	it('Testing wrong suit', () => {
		expect(
			Card.equalCard(
				{
					rank: Types.Rank.Ace,
					suit: Types.Suit.Spade,
				},
				{
					rank: Types.Rank.Ace,
					suit: Types.Suit.Heart,
				}
			)
		).toBeFalsy();
	});

	it('Testing wrong rank', () => {
		expect(
			Card.equalCard(
				{
					rank: Types.Rank.Ace,
					suit: Types.Suit.Spade,
				},
				{
					rank: Types.Rank.Two,
					suit: Types.Suit.Spade,
				}
			)
		).toBeFalsy();
	});
});
