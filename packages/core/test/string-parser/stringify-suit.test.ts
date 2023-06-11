import { StringParser, Types } from '../../src';

describe('Testing StringParser.stringifySuit', () => {
	it('Test converting a suit', () => {
		expect(StringParser.stringifySuit(Types.Suit.Spade)).toBe('S');
	});
});
