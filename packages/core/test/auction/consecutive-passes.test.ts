import { Auction } from "../../src";

describe("Testing Auction.countFinalConsecutivePasses", () => {
  it("Testing on empty auction", () => {
    expect(Auction.countFinalConsecutivePasses([])).toBe(0);
  });

  it("Testing without any passes", () => {
    expect(
      Auction.countFinalConsecutivePasses([{ call: { level: 1, suit: "S" } }])
    ).toBe(0);
  });

  it("Testing with a bid then passes", () => {
    expect(
      Auction.countFinalConsecutivePasses([
        { call: { level: 1, suit: "S" } },
        { call: "P" },
      ])
    ).toBe(1);

    expect(
      Auction.countFinalConsecutivePasses([
        { call: { level: 1, suit: "S" } },
        { call: "P" },
        { call: "P" },
      ])
    ).toBe(2);

    expect(
      Auction.countFinalConsecutivePasses([
        { call: { level: 1, suit: "S" } },
        { call: "P" },
        { call: "P" },
        { call: "P" },
      ])
    ).toBe(3);
  });

  it("Testing with a only passes", () => {
    expect(Auction.countFinalConsecutivePasses([{ call: "P" }])).toBe(1);

    expect(
      Auction.countFinalConsecutivePasses([{ call: "P" }, { call: "P" }])
    ).toBe(2);

    expect(
      Auction.countFinalConsecutivePasses([
        { call: "P" },
        { call: "P" },
        { call: "P" },
      ])
    ).toBe(3);
  });
});

describe("Testing Auction.countConsecutivePasses", () => {
  it("Testing in the middle of the auction", () => {
    expect(
      Auction.countConsecutivePasses(
        [
          { call: { level: 1, suit: "S" } },
          { call: "P" },
          { call: "P" },
          { call: "P" },
        ],
        2
      )
    ).toBe(1);
  });
});
