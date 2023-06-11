import { Deal, StringParser } from '../../src';

describe('Testing Deal.isValid', () => {
	it('Testing with a valid deal', () => {
		const north = StringParser.parseHand('KJ965.Q7.96.9874');
		const east = StringParser.parseHand('T.AJT8.KJT874.65');
		const south = StringParser.parseHand('743.K532.53.AKQ3');
		const west = StringParser.parseHand('AQ82.964.AQ2.JT2');

		expect(
			Deal.isValid({ N: north, E: east, S: south, W: west })
		).toBeTruthy();
	});

	it('Testing a duplicate card (AS)', () => {
		const north = StringParser.parseHand('AJ965.Q7.96.9874');
		const east = StringParser.parseHand('T.AJT8.KJT874.65');
		const south = StringParser.parseHand('743.K532.53.AKQ3');
		const west = StringParser.parseHand('AQ82.964.AQ2.JT2');

		expect(
			Deal.isValid({ N: north, E: east, S: south, W: west })
		).toBeFalsy();
	});

	it('Testing each direction missing a card', () => {
		const north = StringParser.parseHand('KJ965.Q7.96.9874');
		const east = StringParser.parseHand('T.AJT8.KJT874.65');
		const south = StringParser.parseHand('743.K532.53.AKQ3');
		const west = StringParser.parseHand('AQ82.964.AQ2.JT2');

		expect(
			Deal.isValid({
				N: north.slice(0, -1),
				E: east,
				S: south,
				W: west,
			})
		).toBeFalsy();
		expect(
			Deal.isValid({
				N: north,
				E: east.slice(0, -1),
				S: south,
				W: west,
			})
		).toBeFalsy();
		expect(
			Deal.isValid({
				N: north,
				E: east,
				S: south.slice(0, -1),
				W: west,
			})
		).toBeFalsy();
		expect(
			Deal.isValid({
				N: north,
				E: east,
				S: south,
				W: west.slice(0, -1),
			})
		).toBeFalsy();
	});
});
