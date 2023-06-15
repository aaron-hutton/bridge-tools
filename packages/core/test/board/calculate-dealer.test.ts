import { Board } from "../../src";

describe("Testing Board.calculateDealer", () => {
  it("Testing a board number", () => {
    expect(Board.calculateDealer(7)).toStrictEqual("S");
  });

  it("Testing an Exception is thrown for negative board number", () => {
    expect(() => Board.calculateDealer(-1)).toThrowError();
  });
});
