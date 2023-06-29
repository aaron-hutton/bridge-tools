import { StringParser } from "@bridge-tools/core";
import { DealGeneratorConstants } from "../src";
import { calculateNumDeals, calculateNumDealsBits } from "../src/num-deals";

describe("Testing numDealCalculations", () => {
  it("Testing an empty deal", () => {
    const deal = { N: [], E: [], S: [], W: [] };

    expect(calculateNumDeals(deal)).toStrictEqual(
      DealGeneratorConstants.NUMBER_OF_DEALS
    );
    expect(calculateNumDealsBits(deal)).toStrictEqual(
      DealGeneratorConstants.FULL_DEAL_BITS
    );
  });

  it("Testing one fixed hand", () => {
    const hand = StringParser.parseHand("AK532.732.JT74.A");
    const deal = { N: hand, E: [], S: [], W: [] };

    expect(calculateNumDeals(deal)).toStrictEqual(
      DealGeneratorConstants.NUMBER_OF_DEALS_SINGLE_FIXED
    );
    expect(calculateNumDealsBits(deal)).toStrictEqual(
      DealGeneratorConstants.SINGLE_FIXED_DEAL_BITS
    );
  });

  it("Testing two fixed hands", () => {
    const hand1 = StringParser.parseHand("AK532.732.JT74.A");
    const hand2 = StringParser.parseHand("86.AKJ4.Q6.KJ932");
    const deal = { N: hand1, E: hand2, S: [], W: [] };

    expect(calculateNumDeals(deal)).toStrictEqual(
      DealGeneratorConstants.NUMBER_OF_DEALS_DOUBLE_FIXED
    );
    expect(calculateNumDealsBits(deal)).toStrictEqual(
      DealGeneratorConstants.DOUBLE_FIXED_DEAL_BITS
    );
  });

  it("Testing a deal with 38 cards distributed", () => {
    const hand1 = StringParser.parseHand("AK532.732.JT74.A");
    const hand2 = StringParser.parseHand("86.AKJ4.Q6.KJ932");
    const hand3 = StringParser.parseHand("J9.Q5.A982.T765", true);
    const deal = { N: hand1, E: hand2, S: hand3, W: [] };

    expect(calculateNumDeals(deal)).toStrictEqual(14n);
    expect(calculateNumDealsBits(deal)).toStrictEqual(4);
  });
});
