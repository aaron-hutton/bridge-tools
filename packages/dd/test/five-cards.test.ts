import { Hand, StringParser, type Types } from "@bridge-tools/core";
import { solvePartial } from "../src/solve-partial";

// This ending is taken from https://bridgevid.com/2016/08/24/5-card-ending-double-dummy-1/
const deal: Types.Deal = {
  N: StringParser.parseHand("64..32.2", true),
  E: StringParser.parseHand("K.A6..JT", true),
  S: StringParser.parseHand("A2..T5.6", true),
  W: StringParser.parseHand("J3.T.K.5", true),
};

describe("Testing Board.solvePartial with a 5 card ending", () => {
  it("Testing S on lead can take 3 tricks", () => {
    expect(
      solvePartial(deal, [], { declarer: "N", level: 1, strain: "D" }, "S")
    ).toStrictEqual(3);
  });

  it("Testing the AS from S is the only way to take 3 tricks", () => {
    const withoutAS = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "A", suit: "S" }),
    };
    expect(
      solvePartial(
        withoutAS,
        [{ rank: "A", suit: "S" }],
        { declarer: "N", level: 1, strain: "D" },
        "W"
      )
    ).toStrictEqual(3);

    const without2S = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "2", suit: "S" }),
    };
    expect(
      solvePartial(
        without2S,
        [{ rank: "2", suit: "S" }],
        { declarer: "N", level: 1, strain: "D" },
        "W"
      )
    ).toStrictEqual(2);

    const withoutTD = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "T", suit: "D" }),
    };
    expect(
      solvePartial(
        withoutTD,
        [{ rank: "T", suit: "D" }],
        { declarer: "N", level: 1, strain: "D" },
        "W"
      )
    ).toStrictEqual(2);

    const without5D = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "5", suit: "D" }),
    };
    expect(
      solvePartial(
        without5D,
        [{ rank: "5", suit: "D" }],
        { declarer: "N", level: 1, strain: "D" },
        "W"
      )
    ).toStrictEqual(2);

    const without6C = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "6", suit: "C" }),
    };
    expect(
      solvePartial(
        without6C,
        [{ rank: "6", suit: "C" }],
        { declarer: "N", level: 1, strain: "D" },
        "W"
      )
    ).toStrictEqual(2);
  });
});
