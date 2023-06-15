import { Hand } from "..";
import { type Card, type Deal } from "../types";

/**
 * Find which hand of the deal the given card is in.
 * @param deal The deal to check against
 * @param card The card to find
 * @returns The compass direction of the hand containing the card, or null if the card cannot be found
 */
export function findCard(deal: Deal, card: Card) {
  if (Hand.containsCard(deal.N, card)) {
    return "N";
  } else if (Hand.containsCard(deal.E, card)) {
    return "E";
  } else if (Hand.containsCard(deal.S, card)) {
    return "S";
  } else if (Hand.containsCard(deal.W, card)) {
    return "W";
  } else {
    return null;
  }
}
