import { Hand, StringParser } from '../../src';

describe('Testing Hand.exactDistribution', () => {
	it('Testing a normal hand in order', () => {
		const hand = StringParser.parseHand('KQT7.KJ32.A65.J9');

		expect(Hand.exactDistribution(hand)).toStrictEqual([4, 4, 3, 2]);
	});

	it('Testing a normal hand out of order', () => {
		const hand = StringParser.parseHand('J9.KQT7.A65.KJ32');

		expect(Hand.exactDistribution(hand)).toStrictEqual([2, 4, 3, 4]);
	});

	it('Testing a single suited hand', () => {
		const hand = StringParser.parseHand('...AKQJT98765432');

		expect(Hand.exactDistribution(hand)).toStrictEqual([0, 0, 0, 13]);
	});

	it('Testing a hand with a 10 card suit and a 2+ side suit. BUG.', () => {
		const hand = StringParser.parseHand('32..AKQJT987654.');

		expect(Hand.exactDistribution(hand)).toStrictEqual([2, 0, 11, 0]);
	});
});
