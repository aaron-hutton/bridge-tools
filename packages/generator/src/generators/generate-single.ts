import { Card, Constants, Hand } from "@bridge-tools/core";
import { MathRandomNumberGenerator } from "../RNGs";
import {
  NUMBER_OF_DEALS_SINGLE_FIXED,
  SINGLE_FIXED_DEAL_BITS,
} from "../constants";
import { type SingleFixedHandGeneratorOptions } from "../types";
import { doGeneration } from "./generate";

/**
 * Deals out random full deals with one hand fixed.
 * The fixed hand must contain 13 cards, otherwise generateCustomFixed should be used
 * @param options The deal generation options, `hand` *must* contain 13 cards
 * @returns A list of the generated deals, North will always contain `hand`
 */
export function generateSingleFixed({
  hand,
  ...options
}: SingleFixedHandGeneratorOptions) {
  if (hand.length !== Constants.CARDS_IN_HAND) {
    throw new Error(
      "generateSingleFixed can only be used when 'hand' contains 13 cards"
    );
  }

  const allCards = Array.from({ length: Constants.CARDS_IN_DEAL }, (_, i) =>
    Card.numberToCard(i)
  );
  const availableCards = allCards.filter(
    (card) => !Hand.containsCard(hand, card)
  );

  return doGeneration(
    {
      filter: () => true,
      maxAttempts: 1000,
      num: 1,
      rng: MathRandomNumberGenerator,
      ...options,
    },
    SINGLE_FIXED_DEAL_BITS,
    NUMBER_OF_DEALS_SINGLE_FIXED,
    availableCards,
    { N: hand, E: [], S: [], W: [] }
  );
}
