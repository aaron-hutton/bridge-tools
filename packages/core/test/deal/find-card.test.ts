import { Deal, StringParser, Types } from '../../src';

const north = StringParser.parseHand('KJ965.Q7.96.9874');
const east = StringParser.parseHand('T.AJT8.KJT874.65');
const south = StringParser.parseHand('743.K532.53.AKQ3');
const west = StringParser.parseHand('AQ82.964.AQ2.JT2');

const deal = { N: north, E: east, S: south, W: west };
describe('Testing Deal.findCard', () => {
	it('Testing with a valid deal(N)', () => {
		expect(
			Deal.findCard(deal, {
				suit: Types.Suit.Spade,
				rank: Types.Rank.King,
			})
		).toBe(Types.Compass.North);
	});

	it('Testing with a valid deal(E)', () => {
		expect(
			Deal.findCard(deal, {
				suit: Types.Suit.Heart,
				rank: Types.Rank.Ace,
			})
		).toBe(Types.Compass.East);
	});

	it('Testing with a valid deal(S)', () => {
		expect(
			Deal.findCard(deal, {
				suit: Types.Suit.Diamond,
				rank: Types.Rank.Five,
			})
		).toBe(Types.Compass.South);
	});

	it('Testing with a valid deal(W)', () => {
		expect(
			Deal.findCard(deal, {
				suit: Types.Suit.Club,
				rank: Types.Rank.Two,
			})
		).toBe(Types.Compass.West);
	});

	it('Testing with an empty deal', () => {
		expect(
			Deal.findCard(
				{ N: [], E: [], S: [], W: [] },
				{
					suit: Types.Suit.Spade,
					rank: Types.Rank.Ace,
				}
			)
		).toBeNull();
	});

	it('Testing with the card missing', () => {
		expect(
			Deal.findCard(
				{ ...deal, N: StringParser.parseHand('QJ965.Q7.96.9874') },
				{
					suit: Types.Suit.Spade,
					rank: Types.Rank.King,
				}
			)
		).toBeNull();
	});
});
