import { Auction } from "../../src";

describe("Testing Auction.calculateContract", () => {
  it("Testing on empty auction", () => {
    expect(Auction.calculateContract([], "N")).toBeNull();
  });

  it("Testing on passout", () => {
    expect(
      Auction.calculateContract(
        [{ call: "P" }, { call: "P" }, { call: "P" }, { call: "P" }],
        "N"
      )
    ).toStrictEqual("Passout");
  });

  it("Testing on simple auction", () => {
    expect(
      Auction.calculateContract(
        [
          { call: { level: 1, suit: "S" } },
          { call: "P" },
          { call: { level: 2, suit: "S" } },
          { call: "P" },
          { call: "P" },
          { call: "P" },
        ],
        "N"
      )
    ).toStrictEqual({
      declarer: "N",
      level: 2,
      strain: "S",
    });
  });

  it("Testing doubled", () => {
    expect(
      Auction.calculateContract(
        [
          { call: { level: 1, suit: "S" } },
          { call: "P" },
          { call: { level: 2, suit: "S" } },
          { call: "X" },
          { call: "P" },
          { call: "P" },
          { call: "P" },
        ],
        "N"
      )
    ).toStrictEqual({
      declarer: "N",
      level: 2,
      strain: "S",
      doubled: true,
    });
  });

  it("Testing redoubled", () => {
    expect(
      Auction.calculateContract(
        [
          { call: { level: 1, suit: "S" } },
          { call: "P" },
          { call: { level: 2, suit: "S" } },
          { call: "X" },
          { call: "XX" },
          { call: "P" },
          { call: "P" },
          { call: "P" },
        ],
        "N"
      )
    ).toStrictEqual({
      declarer: "N",
      level: 2,
      strain: "S",
      redoubled: true,
    });
  });

  it("Testing with first time suit bid by other side", () => {
    expect(
      Auction.calculateContract(
        [
          { call: { level: 1, suit: "C" } },
          { call: { level: 2, suit: "C" } },
          { call: "P" },
          { call: { level: 2, suit: "NT" } },
          { call: "P" },
          { call: { level: 3, suit: "C" } },
          { call: "P" },
          { call: "P" },
          { call: "P" },
        ],
        "N"
      )
    ).toStrictEqual({
      declarer: "E",
      level: 3,
      strain: "C",
    });
  });

  it("Testing a double earlier in the auction does not cause the result to be doubled", () => {
    expect(
      Auction.calculateContract(
        [
          { call: { level: 1, suit: "C" } },
          { call: "X" },
          { call: { level: 2, suit: "C" } },
          { call: "P" },
          { call: "P" },
          { call: "P" },
        ],
        "N"
      )
    ).toStrictEqual({
      declarer: "N",
      level: 2,
      strain: "C",
    });
  });
});
