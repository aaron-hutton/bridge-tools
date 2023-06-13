import { multipleAttempts } from '../../src/RNGs';

describe('Testing the multipleAttempts function', () => {
	it('Test that a valid rng passes', () => {
		expect(multipleAttempts(() => 1n)).toBe(1n);
	});

	it('Test that an invalid rng causes a failure', () => {
		expect(() => multipleAttempts(() => -1n)).toThrowError();
	});
});
