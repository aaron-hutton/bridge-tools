import { StringParser } from "../../src";

describe("Testing StringParser.stringifySuit", () => {
  it("Test converting a suit", () => {
    expect(StringParser.stringifySuit("S")).toBe("S");
  });
});
