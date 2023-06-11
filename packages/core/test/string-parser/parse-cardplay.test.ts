import { StringParser } from '../../src';

describe('Testing StringParser.parseCardPlay', () => {
	it('Test parsing the whole play', () => {
		expect(
			StringParser.parseCardPlay('SASKSQSJ, HAHKHQHJ, DADKDQDJ')
		).toStrictEqual([
			StringParser.parseTrick('SASKSQSJ'),
			StringParser.parseTrick('HAHKHQHJ'),
			StringParser.parseTrick('DADKDQDJ'),
		]);
	});
});
