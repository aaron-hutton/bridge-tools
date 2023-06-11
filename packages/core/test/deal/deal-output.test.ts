import { StringParser, Deal } from '../../src';

const north = StringParser.parseHand('9.AT97.KQJ86.543');
const west = StringParser.parseHand('AKQJT65432.KQJ..');
const east = StringParser.parseHand('8.6543.AT94.T986');
const south = StringParser.parseHand('7.82.7532.AKQJ72');

const deal = { N: north, E: east, S: south, W: west };

const handNorth =
	'\t\t\t' +
	'9' +
	'\n\t\t\t' +
	'AT97' +
	'\n\t\t\t' +
	'KQJ86' +
	'\n\t\t\t' +
	'543' +
	'\n';
const handsWestEast =
	'AKQJT65432' +
	'\t\t\t\t' +
	'8' +
	'\n' +
	'KQJ' +
	'\t\t\t\t\t' +
	'6543' +
	'\n' +
	'' +
	'\t\t\t\t\t\t' +
	'AT94' +
	'\n' +
	'' +
	'\t\t\t\t\t\t' +
	'T986' +
	'\n';
const handSouth =
	'\t\t\t' +
	'7' +
	'\n\t\t\t' +
	'82' +
	'\n\t\t\t' +
	'7532' +
	'\n\t\t\t' +
	'AKQJ72';

describe('Testing Deal.writeDealAsString', () => {
	it('Test deal string output, West has all long, medium and short length suits', () => {
		const dealString = handNorth + handsWestEast + handSouth;
		expect(Deal.writeDealAsString(deal)).toStrictEqual(dealString);
	});
});
