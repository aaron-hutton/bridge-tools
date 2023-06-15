import { Auction, type Types } from "../../src";

const auction: Types.AuctionCall[] = [
  { call: { level: 1, suit: "S" } },
  { call: "P" },
  { call: { level: 2, suit: "S" } },
  { call: "P" },
  { call: { level: 4, suit: "S" } },
  { call: "P" },
  { call: "P" },
  { call: "P" },
];

const doubleAuction: Types.AuctionCall[] = [
  { call: { level: 1, suit: "S" } },
  { call: "X" },
];

const redoubleAuction: Types.AuctionCall[] = [
  { call: { level: 1, suit: "S" } },
  { call: "X" },
  { call: "XX" },
];

describe("Testing Auction.isAuctionValid", () => {
  it("Testing true with a valid complete auction", () => {
    expect(Auction.isAuctionValid(auction)).toBeTruthy();
  });

  it("Testing true with a valid incomplete auction", () => {
    expect(Auction.isAuctionValid(auction.slice(0, -3))).toBeTruthy();
  });

  it("Testing true with a valid double", () => {
    expect(Auction.isAuctionValid(doubleAuction)).toBeTruthy();
  });

  it("Testing false with an invalid double", () => {
    expect(Auction.isAuctionValid([{ call: "X" }])).toBeFalsy();
  });

  it("Testing true with a valid redouble", () => {
    expect(Auction.isAuctionValid(redoubleAuction)).toBeTruthy();
  });

  it("Testing false with an invalid redouble", () => {
    expect(Auction.isAuctionValid([{ call: "XX" }])).toBeFalsy();
  });

  it("Testing false with an out-of-order auction", () => {
    expect(
      Auction.isAuctionValid([
        { call: { level: 1, suit: "S" } },
        { call: { level: 1, suit: "H" } },
      ])
    ).toBeFalsy();
  });

  it("Testing true with a passout", () => {
    expect(
      Auction.isAuctionValid([
        { call: "P" },
        { call: "P" },
        { call: "P" },
        { call: "P" },
      ])
    ).toBeTruthy();
  });

  it("Testing false with 5 consecutive passes", () => {
    expect(
      Auction.isAuctionValid([
        { call: "P" },
        { call: "P" },
        { call: "P" },
        { call: "P" },
        { call: "P" },
      ])
    ).toBeFalsy();
  });

  it("Testing false with an invalid bid", () => {
    expect(
      Auction.isAuctionValid([{ call: { level: 0, suit: "NT" } }])
    ).toBeFalsy();

    expect(
      Auction.isAuctionValid([{ call: { level: 8, suit: "NT" } }])
    ).toBeFalsy();
  });
});
