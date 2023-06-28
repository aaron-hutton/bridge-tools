import { type Types } from "@bridge-tools/core";
import { multipleAttempts } from "../multiple-attempts";
import { type DealGeneratorOptions } from "../types";
import { performDeal } from "./deal";

export function doGeneration(
  options: Required<DealGeneratorOptions>,
  bits: number,
  numDeals: bigint,
  remainingCards: Types.Card[],
  initialDeal: Types.Deal
): Types.Deal[] {
  const deals: Types.Deal[] = [];

  for (let i = 0; i < options.num; i++) {
    let foundDeal = false;
    for (let attempt = 0; attempt < options.maxAttempts; attempt++) {
      const randomId = multipleAttempts(options.rng, numDeals, bits);
      const deal = performDeal(randomId, initialDeal, numDeals, remainingCards);

      if (options.filter(deal)) {
        foundDeal = true;
        deals.push(deal);
        break;
      }
    }

    if (!foundDeal) {
      throw new Error(
        `Failed to generate a deal within ${options.maxAttempts} attempts. ` +
          `Try simplifying the constraints or increasing the maxAttempts argument.`
      );
    }
  }
  return deals;
}
