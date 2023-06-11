import { Hand, StringParser, Types } from '../../src';

describe('Testing Hand.countSuit', () => {
	it('Testing a hand containing the suit', () => {
		const hand = StringParser.parseHand('KQT7.KJ3.A65.J98');

		expect(Hand.countSuit(hand, Types.Suit.Spade)).toBe(4);
	});

	it('Testing a hand not containing the suit', () => {
		const hand = StringParser.parseHand('.KJ76543.A65.J98');

		expect(Hand.countSuit(hand, Types.Suit.Spade)).toBe(0);
	});

	it('Testing a hand with only that suit', () => {
		const hand = StringParser.parseHand('AKQJT98765432...');

		expect(Hand.countSuit(hand, Types.Suit.Spade)).toBe(13);
	});
});
