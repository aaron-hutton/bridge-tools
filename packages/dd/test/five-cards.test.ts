import { Hand, StringParser, type Types } from "@bridge-tools/core";
import { doubleDummySolveTricks } from "../src";

// This ending is taken from https://bridgevid.com/2016/08/24/5-card-ending-double-dummy-1/
const deal: Types.Deal = {
  N: StringParser.parseHand("64..32.2", true),
  E: StringParser.parseHand("K.A6..JT", true),
  S: StringParser.parseHand("A2..T5.6", true),
  W: StringParser.parseHand("J3.T.K.5", true),
};

const finesseDeal: Types.Deal = {
  N: StringParser.parseHand("AQ...", true),
  E: StringParser.parseHand("32...", true),
  S: StringParser.parseHand("54...", true),
  W: StringParser.parseHand("K6...", true),
};

describe("Testing the solver works with in-progress tricks", () => {
  it("Testing S on lead can take 3 tricks", async () => {
    expect(await doubleDummySolveTricks(deal, [], "S", "D")).toStrictEqual(3);
  });

  it("Testing the AS from S is the only way to hold EW to 2 tricks", async () => {
    const withoutAS = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "A", suit: "S" }),
    };
    expect(
      await doubleDummySolveTricks(
        withoutAS,
        [{ rank: "A", suit: "S" }],
        "W",
        "D"
      )
    ).toStrictEqual(2);

    const without2S = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "2", suit: "S" }),
    };
    expect(
      await doubleDummySolveTricks(
        without2S,
        [{ rank: "2", suit: "S" }],
        "W",
        "D"
      )
    ).toStrictEqual(3);

    const withoutTD = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "T", suit: "D" }),
    };
    expect(
      await doubleDummySolveTricks(
        withoutTD,
        [{ rank: "T", suit: "D" }],
        "W",
        "D"
      )
    ).toStrictEqual(3);

    const without5D = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "5", suit: "D" }),
    };
    expect(
      await doubleDummySolveTricks(
        without5D,
        [{ rank: "5", suit: "D" }],
        "W",
        "D"
      )
    ).toStrictEqual(3);

    const without6C = {
      ...deal,
      S: Hand.removeCard(deal.S, { rank: "6", suit: "C" }),
    };
    expect(
      await doubleDummySolveTricks(
        without6C,
        [{ rank: "6", suit: "C" }],
        "W",
        "D"
      )
    ).toStrictEqual(3);
  });

  it("Testing not taking the finesse in the finesse positions gives 1 trick", async () => {
    const noFinesse = {
      ...finesseDeal,
      S: Hand.removeCard(finesseDeal.S, { rank: "5", suit: "S" }),
      W: Hand.removeCard(finesseDeal.W, { rank: "6", suit: "S" }),
      N: Hand.removeCard(finesseDeal.N, { rank: "A", suit: "S" }),
    };
    expect(
      await doubleDummySolveTricks(
        noFinesse,
        [
          { rank: "5", suit: "S" },
          { rank: "6", suit: "S" },
          { rank: "A", suit: "S" },
        ],
        "E",
        "NT"
      )
    ).toStrictEqual(1);
  });
});
