import { StringParser } from '../../src';
import { filterBySuit } from '../../src/hand';
import { Suit } from '../../src/types';

describe('Testing Hand.filterBySuit', () => {
	it('Test all suits in a single hand', () => {
		const hand = StringParser.parseHand('76543.6543.432.8');
		expect(filterBySuit(hand, Suit.Spade)).toStrictEqual(
			StringParser.parseHand('76543...', true)
		);
		expect(filterBySuit(hand, Suit.Heart)).toStrictEqual(
			StringParser.parseHand('.6543..', true)
		);
		expect(filterBySuit(hand, Suit.Diamond)).toStrictEqual(
			StringParser.parseHand('..432.', true)
		);
		expect(filterBySuit(hand, Suit.Club)).toStrictEqual(
			StringParser.parseHand('...8', true)
		);
	});
	it('Testing a void', () => {
		const hand = StringParser.parseHand('.KQJ32.AT9.QJ854');
		expect(filterBySuit(hand, Suit.Spade)).toStrictEqual(
			StringParser.parseHand('...', true)
		);
	});
});
