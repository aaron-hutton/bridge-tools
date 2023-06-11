import { StringParser, Types } from '../../src';

describe('Testing StringParser.stringifyRanks', () => {
	it('Test each rank', () => {
		expect(StringParser.stringifyRanks([Types.Rank.King])).toBe('K');
	});

	it('Test combined string', () => {
		const expected = 'KQT7';
		const ranks = [
			Types.Rank.King,
			Types.Rank.Queen,
			Types.Rank.Ten,
			Types.Rank.Seven,
		];
		expect(StringParser.stringifyRanks(ranks)).toStrictEqual(expected);
	});
});
