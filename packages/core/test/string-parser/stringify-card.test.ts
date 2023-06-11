import { StringParser, Types } from '../../src';

describe('Testing StringParser.stringifyCard', () => {
	it('Test converting a card', () => {
		expect(
			StringParser.stringifyCard({
				suit: Types.Suit.Spade,
				rank: Types.Rank.Ace,
			})
		).toBe('SA');
	});
});
