import { Deal, Hand, type Types } from "@bridge-tools/core";
import { generate } from "../src";

describe("Testing generate", () => {
  it("Testing a random deal is valid", () => {
    const deals = generate({ num: 1 });

    expect(Deal.isValid(deals[0])).toBeTruthy();
  });

  it("Testing two consecutive deals aren't the same", () => {
    const deals = generate({ num: 2 });

    expect(deals[0]).not.toStrictEqual(deals[1]);
  });

  it("Testing we generate the right number", () => {
    const deals = generate({ num: 5 });

    expect(deals).toHaveLength(5);
  });

  it("Testing that filters work", () => {
    // Force N to have 6 spades
    const deals = generate({
      num: 1,
      filter: (deal) => Hand.exactDistribution(deal.N)[0] === 6,
    });

    expect(Hand.exactDistribution(deals[0].N)[0]).toBe(6);
  });

  it("Testing an impossible filter throws an error", () => {
    // Force N to have 14 spades
    const dealOptions = {
      num: 1,
      maxAttempts: 10,
      filter: (deal: Types.Deal) => Hand.exactDistribution(deal.N)[0] === 14,
    };

    expect(() => generate(dealOptions)).toThrowError();
  });
});
