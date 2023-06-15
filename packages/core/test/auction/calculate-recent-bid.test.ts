import { Auction } from "../../src";

describe("Testing Auction.calculateRecentBid", () => {
  it("Testing on empty auction", () => {
    expect(Auction.calculateRecentBid([])).toBeNull();
  });

  it("Testing on single bid auction", () => {
    expect(
      Auction.calculateRecentBid([{ call: { level: 1, suit: "S" } }])
    ).toStrictEqual({
      bid: { level: 1, suit: "S" },
      index: 0,
    });
  });

  it("Testing on multi bid auction", () => {
    expect(
      Auction.calculateRecentBid([
        { call: { level: 1, suit: "S" } },
        { call: { level: 2, suit: "H" } },
        { call: { level: 2, suit: "S" } },
      ])
    ).toStrictEqual({
      bid: { level: 2, suit: "S" },
      index: 2,
    });
  });

  it("Testing on with passes/x/xx ", () => {
    expect(
      Auction.calculateRecentBid([
        { call: { level: 1, suit: "S" } },
        { call: "P" },
        { call: { level: 2, suit: "S" } },
        { call: "X" },
        { call: { level: 3, suit: "C" } },
        { call: "X" },
        { call: { level: 4, suit: "S" } },
        { call: "P" },
        { call: "P" },
        { call: "P" },
      ])
    ).toStrictEqual({
      bid: { level: 4, suit: "S" },
      index: 6,
    });
  });
});

describe("Testing Auction.calculateRecentBidForIndex", () => {
  it("Testing in the middle of the auction", () => {
    expect(
      Auction.calculateRecentBidForIndex(
        [
          { call: { level: 1, suit: "S" } },
          { call: "P" },
          { call: { level: 2, suit: "S" } },
          { call: "X" },
          { call: { level: 3, suit: "C" } },
          { call: "X" },
          { call: { level: 4, suit: "S" } },
          { call: "P" },
          { call: "P" },
          { call: "P" },
        ],
        5
      )
    ).toStrictEqual({ bid: { level: 3, suit: "C" }, index: 4 });
  });
});
