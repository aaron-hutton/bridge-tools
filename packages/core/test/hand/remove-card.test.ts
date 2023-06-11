import { Hand, StringParser, Types } from '../../src';

describe('Testing Hand.removeCard', () => {
	it('Testing removing a card from a hand', () => {
		const hand = StringParser.parseHand('KQT7.KJ32.A65.J9');
		const hand2 = StringParser.parseHand('QT7.KJ32.A65.J9', true);

		expect(
			Hand.removeCard(hand, {
				rank: Types.Rank.King,
				suit: Types.Suit.Spade,
			})
		).toStrictEqual(hand2);
	});

	it('Testing removing non-existant card from the hand', () => {
		const hand = StringParser.parseHand('KQT7.KJ32.A65.J9');

		expect(() =>
			Hand.removeCard(hand, {
				rank: Types.Rank.Ace,
				suit: Types.Suit.Spade,
			})
		).toThrowError();
	});

	it('Testing removing non-existant card from the hand without error', () => {
		const hand = StringParser.parseHand('KQT7.KJ32.A65.J9');

		expect(
			Hand.removeCard(
				hand,
				{
					rank: Types.Rank.Ace,
					suit: Types.Suit.Spade,
				},
				false
			)
		).toStrictEqual(hand);
	});
});
