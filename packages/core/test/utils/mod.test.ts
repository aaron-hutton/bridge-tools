import { positiveModulo } from '../../src/utils/mod';

describe('Testing Utils.positiveModulo', () => {
	it('Positive number', () => {
		expect(positiveModulo(5, 3)).toBe(2);
	});

	it('0', () => {
		expect(positiveModulo(0, 3)).toBe(0);
	});

	it('Negative number', () => {
		expect(positiveModulo(-5, 3)).toBe(1);
	});
});
