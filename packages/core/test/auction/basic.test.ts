import { Auction, type Types } from "../../src";

describe("Testing Auction.isBid", () => {
  it("Testing true with a suited bid", () => {
    expect(Auction.isBid({ suit: "S", level: 1 })).toBeTruthy();
  });

  it("Testing true with a NT bid", () => {
    expect(Auction.isBid({ suit: "NT", level: 1 })).toBeTruthy();
  });

  it("Testing false with pass", () => {
    expect(Auction.isBid("P")).toBeFalsy();
  });

  it("Testing false with X", () => {
    expect(Auction.isBid("X")).toBeFalsy();
  });

  it("Testing false with XX", () => {
    expect(Auction.isBid("XX")).toBeFalsy();
  });
});

const suitLookup: Record<Types.SuitOrNT, number> = {
  C: 0,
  D: 1,
  H: 2,
  S: 3,
  NT: 4,
};

describe("Testing Auction.biddableSuitToNumber", () => {
  it("Testing the correct number when given a suit", () => {
    for (const [suit, value] of Object.entries(suitLookup)) {
      expect(
        Auction.biddableSuitToNumber(suit as Types.SuitOrNT)
      ).toStrictEqual(value);
    }
  });

  it("Testing an exception is thrown when the input is invalid", () => {
    expect(() =>
      Auction.biddableSuitToNumber("a" as unknown as Types.Suit)
    ).toThrowError();
  });
});

describe("Testing Auction.bidToNumber", () => {
  it("Test some cases", () => {
    expect(Auction.bidToNumber({ level: 1, suit: "C" })).toStrictEqual(0);
    expect(Auction.bidToNumber({ level: 1, suit: "NT" })).toStrictEqual(4);

    expect(Auction.bidToNumber({ level: 7, suit: "NT" })).toStrictEqual(34);
  });
});
