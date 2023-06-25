import { StringParser, type Types } from "@bridge-tools/core";
import { doubleDummySolveTricks } from "../src";

const deal: Types.Deal = {
  N: StringParser.parseHand("AQ...", true),
  E: StringParser.parseHand("32...", true),
  S: StringParser.parseHand("54...", true),
  W: StringParser.parseHand("K6...", true),
};

describe("Testing the different starting positions for doubleDummySolve", () => {
  it("Testing everyone except N on lead should give two tricks", async () => {
    expect(await doubleDummySolveTricks(deal, [], "E", "NT")).toStrictEqual(0);
    expect(await doubleDummySolveTricks(deal, [], "S", "NT")).toStrictEqual(2);
    expect(await doubleDummySolveTricks(deal, [], "W", "NT")).toStrictEqual(0);
  });

  it("Testing North on lead should only give one trick", async () => {
    expect(await doubleDummySolveTricks(deal, [], "N", "NT")).toStrictEqual(1);
  });
});
