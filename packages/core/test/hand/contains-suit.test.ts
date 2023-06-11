import { Hand, StringParser, Types } from '../../src';

describe('Testing Hand.containsSuit', () => {
	it('Testing a hand containing the suit', () => {
		const hand = StringParser.parseHand('KQT7.KJ3.A65.J98');

		expect(Hand.containsSuit(hand, Types.Suit.Spade)).toBeTruthy();
	});

	it('Testing a hand not containing the suit', () => {
		const hand = StringParser.parseHand('.KJ76543.A65.J98');

		expect(Hand.containsSuit(hand, Types.Suit.Spade)).toBeFalsy();
	});
});
