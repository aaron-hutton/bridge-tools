import { StringParser } from "../../src";

const exampleStr = "KQT7.KJ3.A65.J98";
const hand = [
  { suit: "S", rank: "K" },
  { suit: "S", rank: "Q" },
  { suit: "S", rank: "T" },
  { suit: "S", rank: "7" },
  { suit: "H", rank: "K" },
  { suit: "H", rank: "J" },
  { suit: "H", rank: "3" },
  { suit: "D", rank: "A" },
  { suit: "D", rank: "6" },
  { suit: "D", rank: "5" },
  { suit: "C", rank: "J" },
  { suit: "C", rank: "9" },
  { suit: "C", rank: "8" },
];

describe("Testing StringParser.parseHand", () => {
  it("Test parsing a hand", () => {
    expect(StringParser.parseHand(exampleStr)).toStrictEqual(hand);
  });

  it("Test a hand with insufficient suit throws error", () => {
    expect(() => StringParser.parseHand("KQT7.KJ3.A65")).toThrow();
  });

  it("Test a hand without 13 cards fails without allowPartial", () => {
    expect(() => StringParser.parseHand("KQT7...")).toThrow();
  });

  it("Test a hand without 13 cards doesn't fail with allowPartial", () => {
    expect(() => StringParser.parseHand("KQT7...", true)).not.toThrow();
  });
});
