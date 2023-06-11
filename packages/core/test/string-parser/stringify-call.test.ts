import { StringParser, Types } from '../../src';
import { PossibleCalls } from '../../src/types';

describe('Testing StringParser.stringifyCall', () => {
	it('Testing pass', () => {
		expect(
			StringParser.stringifyCall({ call: PossibleCalls.Pass })
		).toStrictEqual('P');
	});
	it('Testing double', () => {
		expect(
			StringParser.stringifyCall({ call: PossibleCalls.Double })
		).toStrictEqual('X');
	});
	it('Testing Redouble', () => {
		expect(
			StringParser.stringifyCall({ call: PossibleCalls.Redouble })
		).toStrictEqual('XX');
	});
	it('Testing bids', () => {
		expect(
			StringParser.stringifyCall({
				call: { level: 1, suit: Types.NoTrump },
			})
		).toStrictEqual('1NT');
		expect(
			StringParser.stringifyCall({
				call: { level: 4, suit: Types.Suit.Spade },
			})
		).toStrictEqual('4S');
	});
});
