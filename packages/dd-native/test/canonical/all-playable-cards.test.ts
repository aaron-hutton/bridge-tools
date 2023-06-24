import { playableCards, type CanonicalCard } from "../../src/canonical-card";

describe("Testing generatePlayableCards", () => {
  it("Testing with an empty trick", () => {
    const hand: CanonicalCard[] = [
      { strain: "S", level: 1, count: 1 },
      { strain: "S", level: 3, count: 1 },
    ];

    expect(playableCards([], hand)).toStrictEqual([
      { strain: "S", level: 1, count: 1 },
      { strain: "S", level: 3, count: 1 },
    ]);
  });

  it("Testing with a void", () => {
    const trick: CanonicalCard[] = [{ strain: "D", level: 4, count: 1 }];

    const hand: CanonicalCard[] = [
      { strain: "S", level: 1, count: 1 },
      { strain: "S", level: 3, count: 1 },
    ];

    expect(playableCards(trick, hand)).toStrictEqual([
      { strain: "S", level: 1, count: 1 },
      { strain: "S", level: 3, count: 1 },
    ]);
  });

  it("Testing with same suit", () => {
    const trick: CanonicalCard[] = [{ strain: "S", level: 1, count: 1 }];

    const hand: CanonicalCard[] = [
      { strain: "S", level: 1, count: 1 },
      { strain: "S", level: 3, count: 1 },
      { strain: "D", level: 1, count: 1 },
      { strain: "H", level: 1, count: 1 },
    ];

    expect(playableCards(trick, hand)).toStrictEqual([
      { strain: "S", level: 1, count: 1 },
      { strain: "S", level: 3, count: 1 },
    ]);
  });
});
