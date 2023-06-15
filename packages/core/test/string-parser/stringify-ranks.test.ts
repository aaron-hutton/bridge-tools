import { StringParser, type Types } from "../../src";

describe("Testing StringParser.stringifyRanks", () => {
  it("Test each rank", () => {
    expect(StringParser.stringifyRanks(["K"])).toBe("K");
  });

  it("Test combined string", () => {
    const expected = "KQT7";
    const ranks: Types.Rank[] = ["K", "Q", "T", "7"];
    expect(StringParser.stringifyRanks(ranks)).toStrictEqual(expected);
  });
});
