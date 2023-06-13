import { Deal, StringParser } from '@bridge-tools/core';
import { decodeDeal } from '../src';

describe('Testing decodeDeal', () => {
	it('Testing the first deal', () => {
		const deal = decodeDeal(0n);

		expect(deal.N).toStrictEqual(
			StringParser.parseHand('AKQJT98765432...')
		);

		expect(deal.E).toStrictEqual(
			StringParser.parseHand('.AKQJT98765432..')
		);

		expect(deal.S).toStrictEqual(
			StringParser.parseHand('..AKQJT98765432.')
		);

		expect(deal.W).toStrictEqual(
			StringParser.parseHand('...AKQJT98765432')
		);
	});

	it('Testing a random deal is valid', () => {
		const deal = decodeDeal(23_644_737_761_238_792_839_237_440_000n);

		expect(Deal.isValid(deal)).toBeTruthy();
	});

	it('Testing that an incorrect id (-1) throws an error', () => {
		expect(() => decodeDeal(-1n)).toThrowError();
	});

	it('Testing that an incorrect id (too big) throws an error', () => {
		expect(() => decodeDeal(2n ** 96n)).toThrowError();
	});
});
