import { evaluateTrick, type CanonicalCard } from "../../src/canonical-card";

describe("Testing evaluateTrick", () => {
  it("Testing a normal NT trick", () => {
    const trick: CanonicalCard[] = [
      { level: 4, strain: "S", count: 1 },
      { level: 3, strain: "S", count: 1 },
      { level: 2, strain: "S", count: 1 },
      { level: 1, strain: "S", count: 1 },
    ];

    expect(evaluateTrick(trick, "NT", 0)).toStrictEqual(3);
  });

  it("Testing a trump trick", () => {
    const trick: CanonicalCard[] = [
      { level: 4, strain: "S", count: 1 },
      { level: 3, strain: "S", count: 1 },
      { level: 12, strain: "H", count: 1 },
      { level: 2, strain: "S", count: 1 },
    ];

    expect(evaluateTrick(trick, "H", 0)).toStrictEqual(2);
  });

  it("Testing a length NT trick", () => {
    const trick: CanonicalCard[] = [
      { level: 12, strain: "S", count: 1 },
      { level: 1, strain: "H", count: 1 },
      { level: 1, strain: "D", count: 1 },
      { level: 1, strain: "C", count: 1 },
    ];

    expect(evaluateTrick(trick, "NT", 0)).toStrictEqual(0);
  });

  it("Testing an invalid trick", () => {
    const trick: CanonicalCard[] = [{ level: 2, strain: "S", count: 1 }];

    expect(() => evaluateTrick(trick, "NT", 2)).toThrowError();
  });
});
