import { Types } from '../../src';
import { parseAuction } from '../../src/string-parser';
import { PossibleCalls } from '../../src/types';

const stringContestedAuction =
	'1S-2D-3D-P-5C-P-5D-P-5NT-P-6H-P-7S-X-P-P-XX-P-P-P';
const stringUncontestedAuction = '1H-2C-2H-2N-3C-3NT';

const listContestedAuction = [
	{ call: { level: 1, suit: Types.Suit.Spade } },
	{ call: { level: 2, suit: Types.Suit.Diamond } },
	{ call: { level: 3, suit: Types.Suit.Diamond } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 5, suit: Types.Suit.Club } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 5, suit: Types.Suit.Diamond } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 5, suit: Types.NoTrump } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 6, suit: Types.Suit.Heart } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 7, suit: Types.Suit.Spade } },
	{ call: PossibleCalls.Double },
	{ call: PossibleCalls.Pass },
	{ call: PossibleCalls.Pass },
	{ call: PossibleCalls.Redouble },
	{ call: PossibleCalls.Pass },
	{ call: PossibleCalls.Pass },
	{ call: PossibleCalls.Pass },
];
const listUncontestedAuction = [
	{ call: { level: 1, suit: Types.Suit.Heart } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 2, suit: Types.Suit.Club } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 2, suit: Types.Suit.Heart } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 2, suit: Types.NoTrump } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 3, suit: Types.Suit.Club } },
	{ call: PossibleCalls.Pass },
	{ call: { level: 3, suit: Types.NoTrump } },
	{ call: PossibleCalls.Pass },
];

describe('Testing StringParser.parseAuction', () => {
	it('Testing contested auction', () => {
		expect(parseAuction(stringContestedAuction)).toStrictEqual(
			listContestedAuction
		);
	});
	it('Testing uncontested auction', () => {
		expect(parseAuction(stringUncontestedAuction, false)).toStrictEqual(
			listUncontestedAuction
		);
	});
});
