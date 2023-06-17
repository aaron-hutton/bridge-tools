import { StringParser, type Types } from "@bridge-tools/core";
import { convertDealToCanonical } from "../../src/canonical-card";

const deal: Types.Deal = {
  N: StringParser.parseHand("AQ...", true),
  E: StringParser.parseHand("32...", true),
  S: StringParser.parseHand("64...", true),
  W: StringParser.parseHand("K5...", true),
};

const deal2: Types.Deal = {
  N: StringParser.parseHand("A...", true),
  E: StringParser.parseHand(".A..", true),
  S: StringParser.parseHand("..A.", true),
  W: StringParser.parseHand("...A", true),
};

describe("Testing convertDealToCanonical", () => {
  it("Testing the finesse hand", () => {
    const converted = convertDealToCanonical(deal);
    expect(converted[0]).toStrictEqual([
      { level: 1, strain: "S", count: 1 },
      { level: 3, strain: "S", count: 1 },
    ]);
    expect(converted[1]).toStrictEqual([{ level: 7, strain: "S", count: 2 }]);
    expect(converted[2]).toStrictEqual([
      { level: 4, strain: "S", count: 1 },
      { level: 6, strain: "S", count: 1 },
    ]);
    expect(converted[3]).toStrictEqual([
      { level: 2, strain: "S", count: 1 },
      { level: 5, strain: "S", count: 1 },
    ]);
  });

  it("Testing the four ace hand", () => {
    const converted = convertDealToCanonical(deal2);
    expect(converted[0]).toStrictEqual([{ level: 1, strain: "S", count: 1 }]);
    expect(converted[1]).toStrictEqual([{ level: 1, strain: "H", count: 1 }]);
    expect(converted[2]).toStrictEqual([{ level: 1, strain: "D", count: 1 }]);
    expect(converted[3]).toStrictEqual([{ level: 1, strain: "C", count: 1 }]);
  });
});
