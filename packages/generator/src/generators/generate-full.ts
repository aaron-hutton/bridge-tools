import { Card, Constants } from "@bridge-tools/core";
import { MathRandomNumberGenerator } from "../RNGs";
import { FULL_DEAL_BITS, NUMBER_OF_DEALS } from "../constants";
import { type DealGeneratorOptions } from "../types";
import { doGeneration } from "./generate";

/**
 * Deals out random full deals according to the specified options
 * @param options The deal generation options
 * @returns A list of the generated deals
 */
export function generate(options: DealGeneratorOptions) {
  const allCards = Array(Constants.CARDS_IN_DEAL).map((_, index) =>
    Card.numberToCard(index)
  );

  return doGeneration(
    {
      filter: () => true,
      maxAttempts: 1000,
      num: 1,
      rng: MathRandomNumberGenerator,
      ...options,
    },
    FULL_DEAL_BITS,
    NUMBER_OF_DEALS,
    allCards,
    { N: [], E: [], S: [], W: [] }
  );
}
