import { Hand, StringParser } from '../../src';

const hand = StringParser.parseHand('KJ965.Q7.96.9874');

describe('Testing Hand.clone', () => {
	it('Testing a cloned hand is equal to the original', () => {
		expect(Hand.clone(hand)).toStrictEqual(hand);
	});

	it('Testing modifying a cloned hand does not modify the original', () => {
		const clonedHand = Hand.clone(hand);

		clonedHand.pop();

		expect(hand).not.toStrictEqual(clonedHand);
	});
});
