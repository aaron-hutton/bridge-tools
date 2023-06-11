import { Auction, Types } from '../../src';

describe('Testing Auction.isBid', () => {
	it('Testing true with a suited bid', () => {
		expect(
			Auction.isBid({ suit: Types.Suit.Spade, level: 1 })
		).toBeTruthy();
	});

	it('Testing true with a NT bid', () => {
		expect(Auction.isBid({ suit: Types.NoTrump, level: 1 })).toBeTruthy();
	});

	it('Testing false with pass', () => {
		expect(Auction.isBid(Types.PossibleCalls.Pass)).toBeFalsy();
	});

	it('Testing false with X', () => {
		expect(Auction.isBid(Types.PossibleCalls.Double)).toBeFalsy();
	});

	it('Testing false with XX', () => {
		expect(Auction.isBid(Types.PossibleCalls.Redouble)).toBeFalsy();
	});
});

const suitLookup = {
	[Types.Suit.Club]: 0,
	[Types.Suit.Diamond]: 1,
	[Types.Suit.Heart]: 2,
	[Types.Suit.Spade]: 3,
	[Types.NoTrump]: 4,
};

describe('Testing Auction.biddableSuitToNumber', () => {
	it('Testing the correct number when given a suit', () => {
		for (const [suit, value] of Object.entries(suitLookup)) {
			expect(
				Auction.biddableSuitToNumber(
					suit as Types.Suit | Types.NoTrumpType
				)
			).toStrictEqual(value);
		}
	});

	it('Testing an exception is thrown when the input is invalid', () => {
		expect(() =>
			Auction.biddableSuitToNumber('a' as unknown as Types.Suit)
		).toThrowError();
	});
});

describe('Testing Auction.bidToNumber', () => {
	it('Test some cases', () => {
		expect(
			Auction.bidToNumber({ level: 1, suit: Types.Suit.Club })
		).toStrictEqual(0);
		expect(
			Auction.bidToNumber({ level: 1, suit: Types.NoTrump })
		).toStrictEqual(4);

		expect(
			Auction.bidToNumber({ level: 7, suit: Types.NoTrump })
		).toStrictEqual(34);
	});
});
