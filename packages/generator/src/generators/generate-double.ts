import { Card, Constants, Hand } from "@bridge-tools/core";
import { MathRandomNumberGenerator } from "../RNGs";
import {
  DOUBLE_FIXED_DEAL_BITS,
  NUMBER_OF_DEALS_DOUBLE_FIXED,
} from "../constants";
import { type DoubleFixedHandGeneratorOptions } from "../types";
import { doGeneration } from "./generate";

/**
 * Deals out random full deals with two hands fixed.
 * The fixed hands must contain 13 cards, otherwise generateCustomFixed should be used
 * @param options The deal generation options, `hand1` and `hand2` *must* contain 13 cards
 * @returns A list of the generated deals, North will always contain `hand1` and East will always contain `hand2`
 */
export function generateDoubleFixed({
  hand1,
  hand2,
  ...options
}: DoubleFixedHandGeneratorOptions) {
  if (
    hand1.length !== Constants.CARDS_IN_HAND ||
    hand2.length !== Constants.CARDS_IN_HAND
  ) {
    throw new Error(
      "generateDoubleFixed can only be used when 'hand1' and 'hand2' contain 13 cards"
    );
  }

  const allCards = Array.from({ length: Constants.CARDS_IN_DEAL }, (_, i) =>
    Card.numberToCard(i)
  );
  const availableCards = allCards.filter(
    (card) => !Hand.containsCard(hand1, card) && !Hand.containsCard(hand2, card)
  );

  return doGeneration(
    {
      filter: () => true,
      maxAttempts: 1000,
      num: 1,
      rng: MathRandomNumberGenerator,
      ...options,
    },
    DOUBLE_FIXED_DEAL_BITS,
    NUMBER_OF_DEALS_DOUBLE_FIXED,
    availableCards,
    { N: hand1, E: hand2, S: [], W: [] }
  );
}
