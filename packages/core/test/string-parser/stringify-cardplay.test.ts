import { StringParser } from '../../src';

describe('Testing StringParser.stringifyCardPlay', () => {
	it('Test converting to and from a string', () => {
		const cardplay = 'SASKSQSJ,HAHKHQHJ,DADKDQDJ';
		const converted = StringParser.parseCardPlay(cardplay);
		expect(StringParser.stringifyCardPlay(converted)).toStrictEqual(
			cardplay
		);
	});
});
