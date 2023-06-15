import { Card, type Types } from "../../src";

describe("Testing Card.suitToNumber", () => {
  it("Testing the correct number when given a suit", () => {
    expect(Card.suitToNumber("S")).toStrictEqual(0);
  });

  it("Testing an exception is thrown when the input is invalid", () => {
    expect(() =>
      Card.suitToNumber("a" as unknown as Types.Suit)
    ).toThrowError();
  });
});

describe("Testing Card.numberToSuit", () => {
  it("Testing the correct suit when given a number", () => {
    expect(Card.numberToSuit(0)).toStrictEqual("S");
  });

  it("Testing an exception is thrown when the input is invalid", () => {
    expect(() => Card.numberToSuit(100)).toThrowError();
  });
});

describe("Testing Card.isMinor", () => {
  it("Test", () => {
    expect(Card.isMinor("S")).toBeFalsy();
    expect(Card.isMinor("H")).toBeFalsy();
    expect(Card.isMinor("D")).toBeTruthy();
    expect(Card.isMinor("C")).toBeTruthy();
  });
});

describe("Testing Card.isMajor", () => {
  it("Test", () => {
    expect(Card.isMajor("S")).toBeTruthy();
    expect(Card.isMajor("H")).toBeTruthy();
    expect(Card.isMajor("D")).toBeFalsy();
    expect(Card.isMajor("C")).toBeFalsy();
  });
});

describe("Testing Card.compareRank", () => {
  it("Testing greater", () => {
    expect(Card.compareRank("A", "2")).toBe(1);
  });
  it("Testing equal", () => {
    expect(Card.compareRank("A", "A")).toBe(0);
  });
  it("Testing less", () => {
    expect(Card.compareRank("2", "A")).toBe(-1);
  });
});

describe("Testing Card.cardToNumber", () => {
  it("Test", () => {
    expect(Card.cardToNumber({ rank: "A", suit: "S" })).toBe(0);
    expect(Card.cardToNumber({ rank: "2", suit: "H" })).toBe(25);
  });
});

describe("Testing Card.numberToCard", () => {
  it("Testing valid cards", () => {
    expect(Card.numberToCard(0)).toStrictEqual({
      rank: "A",
      suit: "S",
    });

    expect(Card.numberToCard(25)).toStrictEqual({
      rank: "2",
      suit: "H",
    });
  });

  it("Testing invalid cards", () => {
    expect(() => Card.numberToCard(-1)).toThrowError();
    expect(() => Card.numberToCard(100)).toThrowError();
  });
});

describe("Testing Card.equalCard", () => {
  it("Testing equal", () => {
    expect(
      Card.equalCard(
        {
          rank: "A",
          suit: "S",
        },
        {
          rank: "A",
          suit: "S",
        }
      )
    ).toBeTruthy();
  });

  it("Testing wrong suit", () => {
    expect(
      Card.equalCard(
        {
          rank: "A",
          suit: "S",
        },
        {
          rank: "A",
          suit: "H",
        }
      )
    ).toBeFalsy();
  });

  it("Testing wrong rank", () => {
    expect(
      Card.equalCard(
        {
          rank: "A",
          suit: "S",
        },
        {
          rank: "2",
          suit: "S",
        }
      )
    ).toBeFalsy();
  });
});
