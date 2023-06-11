import { generateIncreasing } from '../../src/utils/array';

describe('Testing Utils.generateIncreasing', () => {
	it('0 length', () => {
		expect(generateIncreasing(0)).toStrictEqual([]);
	});

	it('non-zero length', () => {
		expect(generateIncreasing(3)).toStrictEqual([0, 1, 2]);
	});
});
