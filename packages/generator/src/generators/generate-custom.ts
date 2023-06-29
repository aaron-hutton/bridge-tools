import { Card, Constants, Deal } from "@bridge-tools/core";
import { MathRandomNumberGenerator } from "../RNGs";
import { calculateNumDeals, calculateNumDealsBits } from "../num-deals";
import { type CustomFixedHandGeneratorOptions } from "../types";
import { doGeneration } from "./generate";

/**
 * Deal out hands which an arbitrary fixed starting deal
 * @param options The deal generation options
 * @returns A list of the generated deals
 */
export function generateCustom({
  fixed,
  ...options
}: CustomFixedHandGeneratorOptions) {
  const allCards = Array.from({ length: Constants.CARDS_IN_DEAL }, (_, i) =>
    Card.numberToCard(i)
  );
  const availableCards = allCards.filter(
    (card) => Deal.findCard(fixed, card) === null
  );

  const numDeals = calculateNumDeals(fixed);
  const numBits = calculateNumDealsBits(fixed);

  return doGeneration(
    {
      filter: () => true,
      maxAttempts: 1000,
      num: 1,
      rng: MathRandomNumberGenerator,
      ...options,
    },
    numBits,
    numDeals,
    availableCards,
    fixed
  );
}
