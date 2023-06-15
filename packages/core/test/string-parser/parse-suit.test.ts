import { StringParser } from "../../src";

describe("Testing StringParser.parseSuit", () => {
  it("Test parsing a suit", () => {
    expect(StringParser.parseSuit("S")).toStrictEqual("S");
  });

  it("Test throwing an error on a non-suit", () => {
    expect(() => StringParser.parseSuit("F")).toThrowError();
  });
});
