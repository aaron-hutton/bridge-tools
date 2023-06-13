import { Deal, Hand, Types } from '@bridge-tools/core';
import { generateDeals } from '../src';

describe('Testing generate', () => {
	it('Testing a random deal is valid', () => {
		const deals = generateDeals({ num: 1 });

		expect(Deal.isValid(deals[0])).toBeTruthy();
	});

	it('Testing we generate the right number', () => {
		const deals = generateDeals({ num: 5 });

		expect(deals).toHaveLength(5);
	});

	it('Testing that filters work', () => {
		// Force N to have 6 spades
		const deals = generateDeals({
			num: 1,
			filter: (deal) => Hand.exactDistribution(deal.N)[0] === 6,
		});

		expect(Hand.exactDistribution(deals[0].N)[0]).toBe(6);
	});

	it('Testing an impossible filter throws an error', () => {
		// Force N to have 14 spades
		const dealOptions = {
			num: 1,
			maxAttempts: 10,
			filter: (deal: Types.Deal) =>
				Hand.exactDistribution(deal.N)[0] === 14,
		};

		expect(() => generateDeals(dealOptions)).toThrowError();
	});
});
