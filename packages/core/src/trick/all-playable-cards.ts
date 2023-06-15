import { containsSuit } from "../hand";
import { type Hand, type Trick } from "../types";

/**
 * Generate all of the cards playable to this trick
 *
 * @param trick The trick to be evaluated
 * @param hand The remaining hand
 * @returns A list of cards which are valid to be played at this point
 */
export function generatePlayableCards(trick: Trick, hand: Hand) {
  // If we're on lead, or we just won the trick, we can lead anything
  if (trick.length === 0) {
    return hand;
  }

  const trickSuit = trick[0].suit;

  // If we're void in the suit lead, we can play anything
  if (!containsSuit(hand, trickSuit)) {
    return hand;
  }

  return hand.filter((card) => card.suit === trickSuit);
}
