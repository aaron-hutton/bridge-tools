import { Board, StringParser, Types } from '../../src';
import { PlayableContract } from '../../src/types';

const north = StringParser.parseHand('Q98.K942.9873.J6');
const east = StringParser.parseHand('JT43.763.T4.T743');
const south = StringParser.parseHand('A765.QJ.K52.A852');
const west = StringParser.parseHand('K2.AT85.AQJ6.KQ9');

const deal = { N: north, E: east, S: south, W: west };
const contract: PlayableContract = {
	level: 1,
	strain: Types.NoTrump,
	declarer: Types.Compass.West,
};

const play = StringParser.parseCardPlay(
	'D9D4D5DJ,CQC6C3C2,CKCJC4C5,C9D8C7CA,HQH5H2H3,HJHAH4H6,' +
		'D6D3DTDK,D2DQD7H7,DAS8S3C8,SKS9S4SA,S7S2SQST,HKCTS5H8,H9SJS6HT'
);

describe('Testing Board.checkPlayValid', () => {
	it('Testing with no play', () => {
		expect(Board.isPlayValid(deal, [], contract)).toBeTruthy();
	});

	it('Testing with valid play', () => {
		expect(Board.isPlayValid(deal, play, contract)).toBeTruthy();
	});

	it('Testing with valid incomplete play', () => {
		const play2 = StringParser.parseCardPlay('D9D4D5DJ');
		expect(Board.isPlayValid(deal, play2, contract)).toBeTruthy();
	});

	it('Testing with valid incomplete play', () => {
		const play2 = StringParser.parseCardPlay('D9D4D5DJ,CQC6');
		expect(Board.isPlayValid(deal, play2, contract)).toBeTruthy();
	});

	it('Testing with duplicate card', () => {
		const play2 = StringParser.parseCardPlay('D9D4D5DJ,CQCQ');
		expect(Board.isPlayValid(deal, play2, contract)).toBeFalsy();
	});

	it('Testing with card in wrong hand', () => {
		const play2 = StringParser.parseCardPlay('D9D4D5DJ,CQC7');
		expect(Board.isPlayValid(deal, play2, contract)).toBeFalsy();
	});

	it('Testing with incomplete early trick', () => {
		const play2 = StringParser.parseCardPlay('D9D4D5,CQC6C3C2');
		expect(Board.isPlayValid(deal, play2, contract)).toBeFalsy();
	});

	it('Testing revoking', () => {
		const play2 = StringParser.parseCardPlay('D9D4D5DJ,CQHKC3C2');
		expect(Board.isPlayValid(deal, play2, contract)).toBeFalsy();
	});

	it('Testing lead out of turn', () => {
		const play2 = StringParser.parseCardPlay('D9D4D5DJ,HKC3C2CQ');
		expect(Board.isPlayValid(deal, play2, contract)).toBeFalsy();
	});
});
