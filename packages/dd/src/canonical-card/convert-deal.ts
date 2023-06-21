import { Constants, Deal, type Types } from "@bridge-tools/core";
import { COMPASS_TO_NUMBER } from "../compass-map";
import { type CanonicalDeal } from "./type";

export function convertDealToCanonical(deal: Types.Deal): CanonicalDeal {
  const canonicalDeal: CanonicalDeal = [[], [], [], []];
  Constants.ALL_SUITS.map((suit) => {
    let currentLevel = 0;
    let lastDirection: Types.Compass | null = null;
    Constants.ALL_CARD_RANKS.map((rank) => {
      const direction = Deal.findCard(deal, { rank, suit });
      if (direction === null) {
        // The deal is incomplete
        return;
      }

      const directionIndex = COMPASS_TO_NUMBER[direction];
      const hand = canonicalDeal[directionIndex];
      if (direction === lastDirection) {
        hand[hand.length - 1].count++;
      } else {
        currentLevel++;
        hand.push({ strain: suit, level: currentLevel, count: 1 });
        lastDirection = direction;
      }
    });
  });

  return canonicalDeal;
}
