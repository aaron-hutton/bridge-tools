import { Constants, Deal, type Types } from "@bridge-tools/core";

/**
 * Deal out the remaining cards according to the given id
 * @param id The id of the deal
 * @param initialDeal Any fixed cards
 * @param possibleDeals The number of deals possible given any fixed cards
 * @param availableCards A list of any cards left to deal out
 * @returns A deal
 */
export function performDeal(
  id: bigint,
  initialDeal: Types.Deal,
  possibleDeals: bigint,
  availableCards: Types.Card[]
): Types.Deal {
  const deal = Deal.clone(initialDeal);

  let i = id;
  let remainingDeals = possibleDeals;
  let remainingCards = BigInt(availableCards.length);
  const CARDS_IN_HAND_BI = BigInt(Constants.CARDS_IN_HAND);

  for (const card of availableCards) {
    // console.log("Card: ", card);
    for (const direction of Constants.ALL_COMPASS) {
      const spaceInHand = CARDS_IN_HAND_BI - BigInt(deal[direction].length);
      const threshold = (remainingDeals * spaceInHand) / remainingCards;

      if (i < threshold) {
        deal[direction].push(card);
        remainingDeals = threshold;
        break;
      } else {
        i -= threshold;
      }
    }
    remainingCards--;
  }

  return deal;
}
