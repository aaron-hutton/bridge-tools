import { Trick, type Types } from "../../src";

describe("Testing Trick.isCardPlayable", () => {
  it("Testing an empty trick trick", () => {
    const trick: Types.Trick = [];

    expect(
      Trick.isCardPlayable(trick, { suit: "S", rank: "A" }, [
        { suit: "S", rank: "A" },
      ])
    ).toStrictEqual(true);
  });

  it("Testing a valid card of the same suit", () => {
    const trick: Types.Trick = [{ suit: "S", rank: "A" }];

    expect(
      Trick.isCardPlayable(trick, { suit: "S", rank: "K" }, [
        { suit: "S", rank: "K" },
      ])
    ).toStrictEqual(true);
  });

  it("Testing a different suit when void", () => {
    const trick: Types.Trick = [{ suit: "S", rank: "A" }];

    expect(
      Trick.isCardPlayable(trick, { suit: "H", rank: "K" }, [
        { suit: "H", rank: "K" },
      ])
    ).toStrictEqual(true);
  });

  it("Testing an invalid card", () => {
    const trick: Types.Trick = [{ suit: "S", rank: "A" }];

    expect(
      Trick.isCardPlayable(trick, { suit: "H", rank: "K" }, [
        { suit: "H", rank: "K" },
        { suit: "S", rank: "K" },
      ])
    ).toStrictEqual(false);
  });
});
