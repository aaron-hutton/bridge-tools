import { Hand, StringParser } from '../../src';

describe('Testing Hand.countMiltonHCP', () => {
	it('Testing Max Points', () => {
		const hand = StringParser.parseHand('AKQJ.AKQ.AKQ.AKQ');
		expect(Hand.countMiltonHCP(hand)).toBe(37);
	});
	it('Testing Yarborough', () => {
		const hand = StringParser.parseHand('76543.6543.432.8');
		expect(Hand.countMiltonHCP(hand)).toBe(0);
	});
	it('Testing Strong NT', () => {
		const hand = StringParser.parseHand('954.AK74.AQ53.K2');
		expect(Hand.countMiltonHCP(hand)).toBe(16);
	});
});
