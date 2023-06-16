import { StringParser, type Types } from "@bridge-tools/core";
import { solvePartial } from "../src/solve-partial";

const deal: Types.Deal = {
  N: StringParser.parseHand("A...", true),
  E: StringParser.parseHand(".A..", true),
  S: StringParser.parseHand("..A.", true),
  W: StringParser.parseHand("...A", true),
};

describe("Testing Board.solvePartial with single trick where everyone has a unique card", () => {
  it("Testing the person on lead always wins the trick", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "N")
    ).toStrictEqual(1);
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "E")
    ).toStrictEqual(0);
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "S")
    ).toStrictEqual(1);
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "W")
    ).toStrictEqual(0);
  });

  it("Testing the trump suit always wins the trick", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "S" }, "N")
    ).toStrictEqual(1);
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "S" }, "E")
    ).toStrictEqual(1);
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "S" }, "S")
    ).toStrictEqual(1);
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "S" }, "W")
    ).toStrictEqual(1);
  });
});
