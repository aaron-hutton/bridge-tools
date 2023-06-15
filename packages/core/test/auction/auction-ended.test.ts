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

describe("Testing Auction.isAuctionEnded", () => {
  it("Testing true with a completed auction", () => {
    expect(Auction.isAuctionEnded(auction)).toBeTruthy();
  });

  it("Testing false with an uncompleted auction", () => {
    expect(Auction.isAuctionEnded(auction.slice(0, -1))).toBeFalsy();
  });

  it("Testing true with a passout", () => {
    expect(
      Auction.isAuctionEnded([
        { call: "P" },
        { call: "P" },
        { call: "P" },
        { call: "P" },
      ])
    ).toBeTruthy();
  });

  it("Testing false with three initial passes", () => {
    expect(
      Auction.isAuctionEnded([{ call: "P" }, { call: "P" }, { call: "P" }])
    ).toBeFalsy();
  });
});
