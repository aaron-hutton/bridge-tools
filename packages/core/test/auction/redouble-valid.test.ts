import { Auction } from "../../src";

describe("Testing Auction.isFinalRedoubleValid", () => {
  it("Testing true with 0 passes", () => {
    expect(
      Auction.isFinalRedoubleValid([
        { call: { level: 1, suit: "S" } },
        { call: "X" },
      ])
    ).toBeTruthy();
  });

  it("Testing false with 1 pass", () => {
    expect(
      Auction.isFinalRedoubleValid([
        { call: { level: 1, suit: "S" } },
        { call: "X" },
        { call: "P" },
      ])
    ).toBeFalsy();
  });

  it("Testing true with 2 passes", () => {
    expect(
      Auction.isFinalRedoubleValid([
        { call: { level: 1, suit: "S" } },
        { call: "X" },
        { call: "P" },
        { call: "P" },
      ])
    ).toBeTruthy();
  });

  it("Testing false with empty auction", () => {
    expect(Auction.isFinalRedoubleValid([])).toBeFalsy();
  });

  it("Testing false with only passes", () => {
    expect(Auction.isFinalRedoubleValid([{ call: "P" }])).toBeFalsy();

    expect(
      Auction.isFinalRedoubleValid([{ call: "P" }, { call: "P" }])
    ).toBeFalsy();

    expect(
      Auction.isFinalRedoubleValid([
        { call: "P" },
        { call: "P" },
        { call: "P" },
      ])
    ).toBeFalsy();
  });
});

describe("Testing Auction.isRedoubleValid", () => {
  it("Testing in the middle of the auction", () => {
    expect(
      Auction.isRedoubleValid(
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
