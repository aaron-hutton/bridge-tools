import { Deal, Hand, StringParser } from "@bridge-tools/core";
import { generateSingleFixed } from "../src";

describe("Testing generateSingleFixed", () => {
  it("Testing a random deal is valid", () => {
    const hand = StringParser.parseHand("AK532.732.JT74.A");
    const deals = generateSingleFixed({ hand, num: 1 });

    expect(Deal.isValid(deals[0])).toBeTruthy();
  });

  it("Testing a random deal has the given hand as North", () => {
    const hand = StringParser.parseHand("AK532.732.JT74.A");
    const deals = generateSingleFixed({ hand, num: 1 });

    expect(deals[0].N).toStrictEqual(hand);
  });

  it("Testing none of the cards in North appear anywhere else", () => {
    const hand = StringParser.parseHand("AK532.732.JT74.A");
    const deals = generateSingleFixed({ hand, num: 1 });

    hand.forEach((card) => {
      expect(Hand.containsCard(deals[0].E, card)).toBeFalsy();
      expect(Hand.containsCard(deals[0].S, card)).toBeFalsy();
      expect(Hand.containsCard(deals[0].W, card)).toBeFalsy();
    });
  });

  it("Testing an invalid fixed hand results in an error", () => {
    const hand = StringParser.parseHand("AK532...", true);

    expect(() => generateSingleFixed({ hand, num: 1 })).toThrowError();
  });
});
