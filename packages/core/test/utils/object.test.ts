import { findOrThrow, invert } from '../../src/utils/object';

describe('Testing Utils.invert', () => {
	it('0 length', () => {
		expect(invert({})).toStrictEqual({});
	});

	it('non-zero length', () => {
		expect(invert({ a: 'x', b: 'y' })).toStrictEqual({
			x: 'a',
			y: 'b',
		});
	});
});

describe('Testing Utils.findOrThrow', () => {
	it('Testing successful retrieval', () => {
		expect(
			findOrThrow<string, string>({ a: 'x', b: 'y' }, 'a', '')
		).toStrictEqual('x');
	});

	it('non-zero length', () => {
		expect(() =>
			findOrThrow<string, string>(
				{ a: 'x', b: 'y' },
				'c' as 'a',
				'Test error'
			)
		).toThrowError();
	});
});
