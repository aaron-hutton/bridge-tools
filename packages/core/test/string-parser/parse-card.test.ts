import { StringParser, Types } from '../../src';

describe('Testing StringParser.parseCard', () => {
	it('Test parsing a card', () => {
		expect(StringParser.parseCard('SA')).toStrictEqual({
			suit: Types.Suit.Spade,
			rank: Types.Rank.Ace,
		});
	});

	it('Test an empty string throws error', () => {
		expect(() => StringParser.parseCard('')).toThrowError();
	});

	it('Test a string with only a suit throws an error', () => {
		expect(() => StringParser.parseCard('S')).toThrowError();
	});

	it('Test a card with an invalid suit throws an error', () => {
		expect(() => StringParser.parseCard('F5')).toThrowError();
	});
});
