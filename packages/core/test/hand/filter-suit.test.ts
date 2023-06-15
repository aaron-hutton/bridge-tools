import { StringParser } from "../../src";
import { filterBySuit } from "../../src/hand";

describe("Testing Hand.filterBySuit", () => {
  it("Test all suits in a single hand", () => {
    const hand = StringParser.parseHand("76543.6543.432.8");
    expect(filterBySuit(hand, "S")).toStrictEqual(
      StringParser.parseHand("76543...", true)
    );
    expect(filterBySuit(hand, "H")).toStrictEqual(
      StringParser.parseHand(".6543..", true)
    );
    expect(filterBySuit(hand, "D")).toStrictEqual(
      StringParser.parseHand("..432.", true)
    );
    expect(filterBySuit(hand, "C")).toStrictEqual(
      StringParser.parseHand("...8", true)
    );
  });
  it("Testing a void", () => {
    const hand = StringParser.parseHand(".KQJ32.AT9.QJ854");
    expect(filterBySuit(hand, "S")).toStrictEqual(
      StringParser.parseHand("...", true)
    );
  });
});
