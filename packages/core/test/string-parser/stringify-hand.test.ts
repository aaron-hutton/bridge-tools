import { StringParser, type Types } from "../../src";

const exampleStr = "KQT7.KJ3.A65.J98";
const hand: Types.Hand = [
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

describe("Testing StringParser.stringifyHand", () => {
  it("Test an example hand", () => {
    expect(StringParser.stringifyHand(hand)).toStrictEqual(exampleStr);
  });

  it("Test a hand with void", () => {
    const handWithVoid = hand.map((c) => {
      if (c.suit === "D") {
        return { suit: "S", rank: c.rank } as Types.Card;
      }
      return c;
    });

    expect(StringParser.stringifyHand(handWithVoid)).toStrictEqual(
      "AKQT765.KJ3..J98"
    );
  });
});
