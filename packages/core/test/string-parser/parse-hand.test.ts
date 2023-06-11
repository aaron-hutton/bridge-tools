import { StringParser, Types } from '../../src';

const exampleStr = 'KQT7.KJ3.A65.J98';
const hand = [
	{ suit: Types.Suit.Spade, rank: Types.Rank.King },
	{ suit: Types.Suit.Spade, rank: Types.Rank.Queen },
	{ suit: Types.Suit.Spade, rank: Types.Rank.Ten },
	{ suit: Types.Suit.Spade, rank: Types.Rank.Seven },
	{ suit: Types.Suit.Heart, rank: Types.Rank.King },
	{ suit: Types.Suit.Heart, rank: Types.Rank.Jack },
	{ suit: Types.Suit.Heart, rank: Types.Rank.Three },
	{ suit: Types.Suit.Diamond, rank: Types.Rank.Ace },
	{ suit: Types.Suit.Diamond, rank: Types.Rank.Six },
	{ suit: Types.Suit.Diamond, rank: Types.Rank.Five },
	{ suit: Types.Suit.Club, rank: Types.Rank.Jack },
	{ suit: Types.Suit.Club, rank: Types.Rank.Nine },
	{ suit: Types.Suit.Club, rank: Types.Rank.Eight },
];

describe('Testing StringParser.parseHand', () => {
	it('Test parsing a hand', () => {
		expect(StringParser.parseHand(exampleStr)).toStrictEqual(hand);
	});

	it('Test a hand with insufficient suit throws error', () => {
		expect(() => StringParser.parseHand('KQT7.KJ3.A65')).toThrow();
	});

	it('Test a hand without 13 cards fails without allowPartial', () => {
		expect(() => StringParser.parseHand('KQT7...')).toThrow();
	});

	it("Test a hand without 13 cards doesn't fail with allowPartial", () => {
		expect(() => StringParser.parseHand('KQT7...', true)).not.toThrow();
	});
});
