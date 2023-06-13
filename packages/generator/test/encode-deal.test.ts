import { StringParser } from '@bridge-tools/core';
import { decodeDeal, encodeDeal } from '../src';

const north = StringParser.parseHand('KJ965.Q7.96.9874');
const east = StringParser.parseHand('T.AJT8.KJT874.65');
const south = StringParser.parseHand('743.K532.53.AKQ3');
const west = StringParser.parseHand('AQ82.964.AQ2.JT2');

const deal = { N: north, E: east, S: south, W: west };

describe('Testing encodeDeal', () => {
	it('Testing that an encoded deal decodes to itself', () => {
		const encoded = encodeDeal(deal);
		expect(decodeDeal(encoded)).toStrictEqual(deal);
	});
});
