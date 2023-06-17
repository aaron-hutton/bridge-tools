import { StringParser, type Types } from "@bridge-tools/core";
import { solvePartial } from "../../src/solve-partial";

const deal: Types.Deal = {
  N: StringParser.parseHand("AQ...", true),
  E: StringParser.parseHand("32...", true),
  S: StringParser.parseHand("54...", true),
  W: StringParser.parseHand("K6...", true),
};

describe("Testing Board.solvePartial with a finesse position", () => {
  it("Testing everyone except N on lead should give two tricks", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "E")
    ).toStrictEqual(2);
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "S")
    ).toStrictEqual(2);
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "W")
    ).toStrictEqual(2);
  });

  it("Testing North on lead should only give one trick", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "N")
    ).toStrictEqual(1);
  });
});
