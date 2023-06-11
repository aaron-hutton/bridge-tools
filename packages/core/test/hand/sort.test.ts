import { Hand, StringParser } from '../../src';

describe('Testing Hand.sort', () => {
	it('Testing by shuffling, sorting and getting the original back', () => {
		const hand = StringParser.parseHand('KQT7.KJ32.A65.J9');
		const shuffled = [
			...hand.slice(3, 6),
			...hand.slice(0, 2),
			...hand.slice(9),
			...hand.slice(2, 3),
			...hand.slice(6, 9),
		];

		expect(Hand.sort(shuffled)).toStrictEqual(hand);
	});
});
