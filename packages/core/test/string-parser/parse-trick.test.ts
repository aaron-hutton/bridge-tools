import { StringParser } from "../../src";

describe("Testing StringParser.parseTrick", () => {
  it("Test parsing a trick", () => {
    expect(StringParser.parseTrick(" SASKSQSJ ")).toStrictEqual([
      {
        suit: "S",
        rank: "A",
      },
      {
        suit: "S",
        rank: "K",
      },
      {
        suit: "S",
        rank: "Q",
      },
      {
        suit: "S",
        rank: "J",
      },
    ]);
  });

  it("Test parsing an incomplete trick", () => {
    expect(StringParser.parseTrick("SA")).toStrictEqual([
      {
        suit: "S",
        rank: "A",
      },
    ]);
  });

  it("Test a 5 card trick throws an error", () => {
    expect(() => StringParser.parseTrick("SASKSQSJST")).toThrow();
  });
});
