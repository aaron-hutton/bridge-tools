import { Hand, StringParser } from '../../src';

describe('Testing Hand.distribution', () => {
	it('Testing a normal hand in order', () => {
		const hand = StringParser.parseHand('KQT7.KJ32.A65.J9');

		expect(Hand.distribution(hand)).toStrictEqual([4, 4, 3, 2]);
	});

	it('Testing a normal hand out of order', () => {
		const hand = StringParser.parseHand('J9.KQT7.A65.KJ32');

		expect(Hand.distribution(hand)).toStrictEqual([4, 4, 3, 2]);
	});

	it('Testing a single suited hand', () => {
		const hand = StringParser.parseHand('...AKQJT98765432');

		expect(Hand.distribution(hand)).toStrictEqual([13, 0, 0, 0]);
	});

	it('Testing a hand with a 10 card suit and a 2+ side suit. BUG.', () => {
		const hand = StringParser.parseHand('32..AKQJT987654.');

		expect(Hand.distribution(hand)).toStrictEqual([11, 2, 0, 0]);
	});
});
