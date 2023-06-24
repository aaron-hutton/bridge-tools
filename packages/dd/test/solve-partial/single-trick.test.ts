import { StringParser, type Types } from "@bridge-tools/core";
import { solvePartial } from "../../src/solve-partial";

const deal: Types.Deal = {
  N: StringParser.parseHand("A...", true),
  E: StringParser.parseHand("K...", true),
  S: StringParser.parseHand("Q...", true),
  W: StringParser.parseHand("J...", true),
};

describe("Testing Board.solvePartial with single trick", () => {
  it("Testing the AS wins the trick independent of starting direction", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "N")
    ).toStrictEqual(1);
  });

  it("Testing the AS wins the trick independent of starting direction", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "E")
    ).toStrictEqual(1);
  });

  it("Testing the AS wins the trick independent of starting direction", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "S")
    ).toStrictEqual(1);
  });

  it("Testing the AS wins the trick independent of starting direction", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "NT" }, "W")
    ).toStrictEqual(1);
  });
});
