import { StringParser } from "../../src";

describe("Testing StringParser.stringifyCall", () => {
  it("Testing pass", () => {
    expect(StringParser.stringifyCall({ call: "P" })).toStrictEqual("P");
  });
  it("Testing double", () => {
    expect(StringParser.stringifyCall({ call: "X" })).toStrictEqual("X");
  });
  it("Testing Redouble", () => {
    expect(StringParser.stringifyCall({ call: "XX" })).toStrictEqual("XX");
  });
  it("Testing bids", () => {
    expect(
      StringParser.stringifyCall({
        call: { level: 1, suit: "NT" },
      })
    ).toStrictEqual("1NT");
    expect(
      StringParser.stringifyCall({
        call: { level: 4, suit: "S" },
      })
    ).toStrictEqual("4S");
  });
});
