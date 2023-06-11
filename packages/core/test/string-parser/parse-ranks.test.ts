import { StringParser, Types } from '../../src';

describe('Testing StringParser.parseRanks', () => {
	it('Test each rank', () => {
		expect(StringParser.parseRanks('K')).toStrictEqual([Types.Rank.King]);
	});

	it('Test combined string', () => {
		const str = 'KQ107';
		const expected = [
			Types.Rank.King,
			Types.Rank.Queen,
			Types.Rank.Ten,
			Types.Rank.Seven,
		];
		expect(StringParser.parseRanks(str)).toStrictEqual(expected);
	});

	it('Test whitespace is ignored', () => {
		const str = 'K Q 10 7';
		const expected = [
			Types.Rank.King,
			Types.Rank.Queen,
			Types.Rank.Ten,
			Types.Rank.Seven,
		];
		expect(StringParser.parseRanks(str)).toStrictEqual(expected);
	});

	it('Test the 10 cannot have whitespace between the 1 and 0', () => {
		const str = 'KQ1 07';
		expect(() => StringParser.parseRanks(str)).toThrowError();
	});
});
