import { StringParser } from "../../src";

describe("Testing StringParser.parseCall", () => {
  it("Testing a bid", () => {
    expect(StringParser.parseCall("1S")).toStrictEqual({
      call: { level: 1, suit: "S" },
    });
    expect(StringParser.parseCall("7NT")).toStrictEqual({
      call: { level: 7, suit: "NT" },
    });
  });
  it("Testing pass", () => {
    expect(StringParser.parseCall("P")).toStrictEqual({
      call: "P",
    });
  });
  it("Testing double", () => {
    expect(StringParser.parseCall("X")).toStrictEqual({
      call: "X",
    });
  });
  it("Testing redouble", () => {
    expect(StringParser.parseCall("xx")).toStrictEqual({
      call: "XX",
    });
  });
  it("Testing throwing an error on an invalid call", () => {
    expect(() => StringParser.parseCall("t")).toThrowError();
  });
});
