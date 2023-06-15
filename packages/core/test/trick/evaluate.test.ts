import { Trick, type Types } from "../../src";

describe("Testing Trick.evaluate", () => {
  it("Testing a normal NT trick", () => {
    const trick: Types.Trick = [
      { rank: "J", suit: "S" },
      { rank: "Q", suit: "S" },
      { rank: "K", suit: "S" },
      { rank: "A", suit: "S" },
    ];

    expect(Trick.evaluate(trick, "N")).toStrictEqual("W");
  });

  it("Testing a trump trick", () => {
    const trick: Types.Trick = [
      { rank: "J", suit: "S" },
      { rank: "Q", suit: "S" },
      { rank: "K", suit: "S" },
      { rank: "2", suit: "H" },
    ];

    expect(Trick.evaluate(trick, "W", "H")).toStrictEqual("S");
  });

  it("Testing a length NT trick", () => {
    const trick: Types.Trick = [
      { rank: "2", suit: "S" },
      { rank: "A", suit: "H" },
      { rank: "A", suit: "D" },
      { rank: "A", suit: "C" },
    ];

    expect(Trick.evaluate(trick, "N")).toStrictEqual("N");
  });

  it("Testing an invalid trick", () => {
    const trick: Types.Trick = [{ rank: "2", suit: "S" }];

    expect(() => Trick.evaluate(trick, "N")).toThrowError();
  });
});
