import { type Types } from "@bridge-tools/core";
import {
  type CanonicalDeal,
  type CanonicalHand,
  type CanonicalTrick,
} from "./type";

export function playableCards(
  deal: CanonicalDeal,
  trick: CanonicalTrick,
  hand: CanonicalHand,
  trump: Types.SuitOrNT
) {
  // If we're on lead, or we just won the trick, we can lead anything
  if (trick.length === 0) {
    return hand;
  }

  const trickSuit = trick[0].strain;

  // If we're void in the suit lead, we can play anything
  if (!hand.find((c) => c.strain === trickSuit)) {
    return hand;
  }

  return hand.filter((card) => card.strain === trickSuit);
}

// function reorderHand(deal: CanonicalCard[][]);
