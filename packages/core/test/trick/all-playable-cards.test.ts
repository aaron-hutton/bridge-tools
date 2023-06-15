import { StringParser, Trick, type Types } from "../../src";
import { type Hand } from "../../src/types";

describe("Testing Trick.generatePlayableCards", () => {
  it("Testing with an empty trick", () => {
    const trick: Types.Trick = [];

    const hand: Hand = [
      { suit: "S", rank: "A" },
      { suit: "S", rank: "K" },
    ];

    expect(
      StringParser.stringifyHand(Trick.generatePlayableCards(trick, hand))
    ).toStrictEqual("AK...");
  });

  it("Testing with a void", () => {
    const trick: Types.Trick = [{ suit: "D", rank: "A" }];

    const hand: Hand = [
      { suit: "S", rank: "A" },
      { suit: "S", rank: "K" },
    ];

    expect(
      StringParser.stringifyHand(Trick.generatePlayableCards(trick, hand))
    ).toStrictEqual("AK...");
  });

  it("Testing with same suit", () => {
    const trick: Types.Trick = [{ suit: "S", rank: "A" }];

    const hand: Hand = [
      { suit: "S", rank: "A" },
      { suit: "S", rank: "K" },
      { suit: "D", rank: "A" },
      { suit: "H", rank: "A" },
    ];

    expect(
      StringParser.stringifyHand(Trick.generatePlayableCards(trick, hand))
    ).toStrictEqual("AK...");
  });
});
