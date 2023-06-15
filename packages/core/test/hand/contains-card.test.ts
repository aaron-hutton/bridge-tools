import { Hand, StringParser, type Types } from "../../src";

describe("Testing Hand.containsCard", () => {
  it("Testing a hand containing the card", () => {
    const hand = StringParser.parseHand("KQT7.KJ3.A65.J98");
    const card: Types.Card = { rank: "K", suit: "S" };

    expect(Hand.containsCard(hand, card)).toBeTruthy();
  });

  it("Testing a hand not containing the card", () => {
    const hand = StringParser.parseHand("KQT7.KJ3.A65.J98");
    const card: Types.Card = { rank: "A", suit: "S" };

    expect(Hand.containsCard(hand, card)).toBeFalsy();
  });
});
