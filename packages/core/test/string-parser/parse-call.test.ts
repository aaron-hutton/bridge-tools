import { StringParser, Types } from '../../src';
import { PossibleCalls } from '../../src/types';

describe('Testing StringParser.parseCall', () => {
	it('Testing a bid', () => {
		expect(StringParser.parseCall('1S')).toStrictEqual({
			call: { level: 1, suit: Types.Suit.Spade },
		});
		expect(StringParser.parseCall('7NT')).toStrictEqual({
			call: { level: 7, suit: Types.NoTrump },
		});
	});
	it('Testing pass', () => {
		expect(StringParser.parseCall('P')).toStrictEqual({
			call: PossibleCalls.Pass,
		});
	});
	it('Testing double', () => {
		expect(StringParser.parseCall('X')).toStrictEqual({
			call: PossibleCalls.Double,
		});
	});
	it('Testing redouble', () => {
		expect(StringParser.parseCall('xx')).toStrictEqual({
			call: PossibleCalls.Redouble,
		});
	});
	it('Testing throwing an error on an invalid call', () => {
		expect(() => StringParser.parseCall('t')).toThrowError();
	});
});
