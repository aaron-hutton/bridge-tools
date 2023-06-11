import { StringParser, Types } from '../../src';

describe('Testing StringParser.parseTrick', () => {
	it('Test parsing a trick', () => {
		expect(StringParser.parseTrick(' SASKSQSJ ')).toStrictEqual([
			{
				suit: Types.Suit.Spade,
				rank: Types.Rank.Ace,
			},
			{
				suit: Types.Suit.Spade,
				rank: Types.Rank.King,
			},
			{
				suit: Types.Suit.Spade,
				rank: Types.Rank.Queen,
			},
			{
				suit: Types.Suit.Spade,
				rank: Types.Rank.Jack,
			},
		]);
	});

	it('Test parsing an incomplete trick', () => {
		expect(StringParser.parseTrick('SA')).toStrictEqual([
			{
				suit: Types.Suit.Spade,
				rank: Types.Rank.Ace,
			},
		]);
	});

	it('Test a 5 card trick throws an error', () => {
		expect(() => StringParser.parseTrick('SASKSQSJST')).toThrow();
	});
});
