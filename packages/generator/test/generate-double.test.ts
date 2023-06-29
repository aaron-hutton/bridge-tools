import { Deal, Hand, StringParser } from "@bridge-tools/core";
import { generateDoubleFixed } from "../src";

describe("Testing generateDoubleFixed", () => {
  it("Testing a random deal is valid", () => {
    const hand1 = StringParser.parseHand("AK532.732.JT74.A");
    const hand2 = StringParser.parseHand("86.AKJ4.Q6.KJ932");
    const deals = generateDoubleFixed({ hand1, hand2, num: 1 });

    expect(Deal.isValid(deals[0])).toBeTruthy();
  });

  it("Testing a random deal has the given hands as North and East", () => {
    const hand1 = StringParser.parseHand("AK532.732.JT74.A");
    const hand2 = StringParser.parseHand("86.AKJ4.Q6.KJ932");
    const deals = generateDoubleFixed({ hand1, hand2, num: 1 });

    expect(deals[0].N).toStrictEqual(hand1);
    expect(deals[0].E).toStrictEqual(hand2);
  });

  it("Testing none of the cards in North or East appear anywhere else", () => {
    const hand1 = StringParser.parseHand("AK532.732.JT74.A");
    const hand2 = StringParser.parseHand("86.AKJ4.Q6.KJ932");
    const deals = generateDoubleFixed({ hand1, hand2, num: 1 });

    hand1.forEach((card) => {
      expect(Hand.containsCard(deals[0].S, card)).toBeFalsy();
      expect(Hand.containsCard(deals[0].W, card)).toBeFalsy();
    });

    hand2.forEach((card) => {
      expect(Hand.containsCard(deals[0].S, card)).toBeFalsy();
      expect(Hand.containsCard(deals[0].W, card)).toBeFalsy();
    });
  });

  it("Testing an invalid fixed hand results in an error", () => {
    const validHand1 = StringParser.parseHand("AK532.732.JT74.A");
    const validHand2 = StringParser.parseHand("86.AKJ4.Q6.KJ932");
    const invalidHand1 = StringParser.parseHand("AK532...", true);
    const invalidHand2 = StringParser.parseHand("86...", true);

    expect(() =>
      generateDoubleFixed({ hand1: invalidHand1, hand2: validHand2, num: 1 })
    ).toThrowError();
    expect(() =>
      generateDoubleFixed({ hand1: validHand1, hand2: invalidHand2, num: 1 })
    ).toThrowError();
  });
});
