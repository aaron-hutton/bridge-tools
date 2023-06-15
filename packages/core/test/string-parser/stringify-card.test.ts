import { StringParser } from "../../src";

describe("Testing StringParser.stringifyCard", () => {
  it("Test converting a card", () => {
    expect(
      StringParser.stringifyCard({
        suit: "S",
        rank: "A",
      })
    ).toBe("SA");
  });
});
