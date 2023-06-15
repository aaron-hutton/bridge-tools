import { Card } from "../../src";

describe("Testing Card.compareCard", () => {
  it("Testing without trumps same suit", () => {
    // AS vs AS
    expect(Card.compare(Card.numberToCard(0), Card.numberToCard(0))).toBe(0);

    // AS vs KS
    expect(Card.compare(Card.numberToCard(0), Card.numberToCard(1))).toBe(1);

    // KS vs AS
    expect(Card.compare(Card.numberToCard(1), Card.numberToCard(0))).toBe(-1);
  });

  it("Testing without trumps different suit", () => {
    // 2S vs AH
    expect(
      Card.compare(Card.numberToCard(12), Card.numberToCard(13), "C")
    ).toBe(1);
  });

  it("Testing with trumps", () => {
    // 2S vs AH
    expect(
      Card.compare(Card.numberToCard(12), Card.numberToCard(13), "S")
    ).toBe(1);

    // 2S vs AH
    expect(
      Card.compare(Card.numberToCard(12), Card.numberToCard(13), "H")
    ).toBe(-1);
  });
});
