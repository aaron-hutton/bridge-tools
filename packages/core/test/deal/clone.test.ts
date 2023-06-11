import { Deal, StringParser } from '../../src';

const north = StringParser.parseHand('KJ965.Q7.96.9874');
const east = StringParser.parseHand('T.AJT8.KJT874.65');
const south = StringParser.parseHand('743.K532.53.AKQ3');
const west = StringParser.parseHand('AQ82.964.AQ2.JT2');

const deal = { N: north, E: east, S: south, W: west };
describe('Testing Deal.clone', () => {
	it('Testing a cloned deal is equal to the original', () => {
		expect(Deal.clone(deal)).toStrictEqual(deal);
	});

	it('Testing modifying a cloned deal does not modify the original', () => {
		const clonedDeal = Deal.clone(deal);

		clonedDeal.N.pop();

		expect(deal).not.toStrictEqual(clonedDeal);
	});
});
