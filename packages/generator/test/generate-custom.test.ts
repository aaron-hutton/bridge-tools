import { Deal, Hand, StringParser } from "@bridge-tools/core";
import { generateCustom } from "../src";

describe("Testing generateCustom", () => {
  it("Testing a random deal is valid", () => {
    const hand = StringParser.parseHand("AK532...", true);
    const deals = generateCustom({
      fixed: { N: hand, E: [], S: [], W: [] },
      num: 1,
    });

    expect(Deal.isValid(deals[0])).toBeTruthy();
  });

  it("Testing a random deal has the given cards in the North hand", () => {
    const hand = StringParser.parseHand("AK532...", true);
    const deals = generateCustom({
      fixed: { N: hand, E: [], S: [], W: [] },
      num: 1,
    });

    expect(Hand.containsCard(deals[0].N, hand[0])).toBeTruthy();
    expect(Hand.containsCard(deals[0].N, hand[1])).toBeTruthy();
    expect(Hand.containsCard(deals[0].N, hand[2])).toBeTruthy();
    expect(Hand.containsCard(deals[0].N, hand[3])).toBeTruthy();
    expect(Hand.containsCard(deals[0].N, hand[4])).toBeTruthy();
  });

  it("Testing none of the cards in North appear anywhere else", () => {
    const hand = StringParser.parseHand("AK532...", true);
    const deals = generateCustom({
      fixed: { N: hand, E: [], S: [], W: [] },
      num: 1,
    });

    hand.forEach((card) => {
      expect(Hand.containsCard(deals[0].E, card)).toBeFalsy();
      expect(Hand.containsCard(deals[0].S, card)).toBeFalsy();
      expect(Hand.containsCard(deals[0].W, card)).toBeFalsy();
    });
  });

  it("Testing with multiple fixed hands", () => {
    const hand1 = StringParser.parseHand("AK532...", true);
    const hand2 = StringParser.parseHand(".JT98..", true);
    const deals = generateCustom({
      fixed: { N: hand1, E: hand2, S: [], W: [] },
      num: 1,
    });

    expect(Hand.containsCard(deals[0].N, hand1[0])).toBeTruthy();
    expect(Hand.containsCard(deals[0].E, hand2[0])).toBeTruthy();
  });

  it("Testing with a very constrained hand", () => {
    const hand1 = StringParser.parseHand("AK532.732.JT74.A");
    const hand2 = StringParser.parseHand("86.AKJ4.Q6.KJ932");
    const hand3 = StringParser.parseHand("J9.Q5.A982.T765", true);
    const deals = generateCustom({
      fixed: { N: hand1, E: hand2, S: hand3, W: [] },
      num: 1,
    });

    expect(Deal.isValid(deals[0])).toBeTruthy();
  });
});
