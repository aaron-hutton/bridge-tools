import { Hand, StringParser } from "../../src";

describe("Testing Hand.removeCard", () => {
  it("Testing removing a card from a hand", () => {
    const hand = StringParser.parseHand("KQT7.KJ32.A65.J9");
    const hand2 = StringParser.parseHand("QT7.KJ32.A65.J9", true);

    expect(
      Hand.removeCard(hand, {
        rank: "K",
        suit: "S",
      })
    ).toStrictEqual(hand2);
  });

  it("Testing removing non-existant card from the hand", () => {
    const hand = StringParser.parseHand("KQT7.KJ32.A65.J9");

    expect(() =>
      Hand.removeCard(hand, {
        rank: "A",
        suit: "S",
      })
    ).toThrowError();
  });

  it("Testing removing non-existant card from the hand without error", () => {
    const hand = StringParser.parseHand("KQT7.KJ32.A65.J9");

    expect(
      Hand.removeCard(
        hand,
        {
          rank: "A",
          suit: "S",
        },
        false
      )
    ).toStrictEqual(hand);
  });
});
