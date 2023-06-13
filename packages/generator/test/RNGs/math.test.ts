import { Constants, RNG } from '../../src';

describe('Testing the MathRandomNumberGenerator', () => {
	it('Testing we get a valid number ', () => {
		const id = RNG.MathRandomNumberGenerator();

		expect(0n <= id && id < Constants.NUMBER_OF_DEALS).toBeTruthy();
	});
});
