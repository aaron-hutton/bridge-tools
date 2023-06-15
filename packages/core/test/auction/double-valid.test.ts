import { Auction } from "../../src";

describe("Testing Auction.isFinalDoubleValid", () => {
  it("Testing true with 0 passes", () => {
    expect(
      Auction.isFinalDoubleValid([{ call: { level: 1, suit: "S" } }])
    ).toBeTruthy();
  });

  it("Testing false with 1 pass", () => {
    expect(
      Auction.isFinalDoubleValid([
        { call: { level: 1, suit: "S" } },
        { call: "P" },
      ])
    ).toBeFalsy();
  });

  it("Testing true with 2 passes", () => {
    expect(
      Auction.isFinalDoubleValid([
        { call: { level: 1, suit: "S" } },
        { call: "P" },
        { call: "P" },
      ])
    ).toBeTruthy();
  });

  it("Testing false with empty auction", () => {
    expect(Auction.isFinalDoubleValid([])).toBeFalsy();
  });

  it("Testing false with only passes", () => {
    expect(Auction.isFinalDoubleValid([{ call: "P" }])).toBeFalsy();

    expect(
      Auction.isFinalDoubleValid([{ call: "P" }, { call: "P" }])
    ).toBeFalsy();

    expect(
      Auction.isFinalDoubleValid([{ call: "P" }, { call: "P" }, { call: "P" }])
    ).toBeFalsy();
  });
});

describe("Testing Auction.isDoubleValid", () => {
  it("Testing in the middle of the auction", () => {
    expect(
      Auction.isDoubleValid(
        [
          { call: { level: 1, suit: "S" } },
          { call: "P" },
          { call: "P" },
          { call: "P" },
        ],
        2
      )
    ).toBeFalsy();
  });
});
