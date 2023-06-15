import { Deal, StringParser } from "../../src";

const north = StringParser.parseHand("KJ965.Q7.96.9874");
const east = StringParser.parseHand("T.AJT8.KJT874.65");
const south = StringParser.parseHand("743.K532.53.AKQ3");
const west = StringParser.parseHand("AQ82.964.AQ2.JT2");

const deal = { N: north, E: east, S: south, W: west };
describe("Testing Deal.findCard", () => {
  it("Testing with a valid deal(N)", () => {
    expect(
      Deal.findCard(deal, {
        suit: "S",
        rank: "K",
      })
    ).toBe("N");
  });

  it("Testing with a valid deal(E)", () => {
    expect(
      Deal.findCard(deal, {
        suit: "H",
        rank: "A",
      })
    ).toBe("E");
  });

  it("Testing with a valid deal(S)", () => {
    expect(
      Deal.findCard(deal, {
        suit: "D",
        rank: "5",
      })
    ).toBe("S");
  });

  it("Testing with a valid deal(W)", () => {
    expect(
      Deal.findCard(deal, {
        suit: "C",
        rank: "2",
      })
    ).toBe("W");
  });

  it("Testing with an empty deal", () => {
    expect(
      Deal.findCard(
        { N: [], E: [], S: [], W: [] },
        {
          suit: "S",
          rank: "A",
        }
      )
    ).toBeNull();
  });

  it("Testing with the card missing", () => {
    expect(
      Deal.findCard(
        { ...deal, N: StringParser.parseHand("QJ965.Q7.96.9874") },
        {
          suit: "S",
          rank: "K",
        }
      )
    ).toBeNull();
  });
});
