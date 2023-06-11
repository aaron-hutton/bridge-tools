import { StringParser } from '../../src';

describe('Testing StringParser.stringifyTrick', () => {
	it('Test converting to and from a trick', () => {
		const trick = 'SASKSQSJ';
		const converted = StringParser.parseTrick(trick);
		expect(StringParser.stringifyTrick(converted)).toStrictEqual(trick);
	});
});
