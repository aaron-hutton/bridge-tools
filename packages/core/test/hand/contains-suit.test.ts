import { Hand, StringParser } from "../../src";

describe("Testing Hand.containsSuit", () => {
  it("Testing a hand containing the suit", () => {
    const hand = StringParser.parseHand("KQT7.KJ3.A65.J98");

    expect(Hand.containsSuit(hand, "S")).toBeTruthy();
  });

  it("Testing a hand not containing the suit", () => {
    const hand = StringParser.parseHand(".KJ76543.A65.J98");

    expect(Hand.containsSuit(hand, "S")).toBeFalsy();
  });
});
