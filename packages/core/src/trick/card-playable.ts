import { containsSuit } from "../hand";
import { type Card, type Hand, type Trick } from "../types";

/**
 * Evaluate if a given card can be played to the current trick
 *
 * @param trick The trick to be evaluated
 * @param card The card to test
 * @param hand The remainder of the hand, to determine if it is void in the starting suit
 * @returns True if the card can be played to that trick, false otherwise
 */
export function isCardPlayable(trick: Trick, card: Card, hand: Hand) {
  // If we're on lead, or we just won the trick, we can lead anything
  if (trick.length === 0) {
    return true;
  }

  const trickSuit = trick[0].suit;

  // If the card is the same suit as the first card of the trick, we can play it
  if (card.suit === trickSuit) {
    return true;
  }

  // If we have no more of the original suit, we can play anything
  return !containsSuit(hand, trickSuit);
}
