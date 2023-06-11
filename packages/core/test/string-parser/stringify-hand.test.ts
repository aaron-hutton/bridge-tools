import { StringParser, Types } from '../../src';

const exampleStr = 'KQT7.KJ3.A65.J98';
const hand = [
	{ suit: Types.Suit.Spade, rank: Types.Rank.King },
	{ suit: Types.Suit.Spade, rank: Types.Rank.Queen },
	{ suit: Types.Suit.Spade, rank: Types.Rank.Ten },
	{ suit: Types.Suit.Spade, rank: Types.Rank.Seven },
	{ suit: Types.Suit.Heart, rank: Types.Rank.King },
	{ suit: Types.Suit.Heart, rank: Types.Rank.Jack },
	{ suit: Types.Suit.Heart, rank: Types.Rank.Three },
	{ suit: Types.Suit.Diamond, rank: Types.Rank.Ace },
	{ suit: Types.Suit.Diamond, rank: Types.Rank.Six },
	{ suit: Types.Suit.Diamond, rank: Types.Rank.Five },
	{ suit: Types.Suit.Club, rank: Types.Rank.Jack },
	{ suit: Types.Suit.Club, rank: Types.Rank.Nine },
	{ suit: Types.Suit.Club, rank: Types.Rank.Eight },
];

describe('Testing StringParser.stringifyHand', () => {
	it('Test an example hand', () => {
		expect(StringParser.stringifyHand(hand)).toStrictEqual(exampleStr);
	});

	it('Test a hand with void', () => {
		const handWithVoid = hand.map((c) => {
			if (c.suit === Types.Suit.Diamond) {
				return { suit: Types.Suit.Spade, rank: c.rank };
			}
			return c;
		});

		expect(StringParser.stringifyHand(handWithVoid)).toStrictEqual(
			'AKQT765.KJ3..J98'
		);
	});
});
