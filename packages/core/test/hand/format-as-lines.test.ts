import { Hand, StringParser } from '../../src';
describe('Testing Hand.formatHandAsLines', () => {
	it('Hand with 4 suits', () => {
		expect(
			Hand.formatHandAsLines(StringParser.parseHand('KJ96.Q7.964.9874'))
		).toStrictEqual(['KJ96', 'Q7', '964', '9874']);
	});
	it('Hand with void', () => {
		const hand = StringParser.parseHand('.KQJT9.43.AJT876');
		expect(Hand.formatHandAsLines(hand)).toStrictEqual([
			'',
			'KQJT9',
			'43',
			'AJT876',
		]);
	});
});
