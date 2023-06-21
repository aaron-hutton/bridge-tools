import { Constants, Deal, type Types } from "@bridge-tools/core";
import { COMPASS_TO_NUMBER } from "./compass-map";

export interface CanonicalCard {
  strain: Types.Suit;
  level: number;
  count: number;
}

export function convertDealToCanonical(deal: Types.Deal): CanonicalCard[][] {
  const canonicalDeal: CanonicalCard[][] = [[], [], [], []];
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

export function hashCanonicalDeal(deal: CanonicalCard[][], direction: number) {
  const result: string[] = [];

  deal.forEach((hand) => {
    hand.forEach((card) => {
      result.push(`${card.strain}${card.level}${card.count}`);
    });
  });
  result.push(direction.toString());

  return result.join();
}

export function evaluateTrick(
  trick: CanonicalCard[],
  trump: Types.SuitOrNT,
  directionIndex: number
) {
  if (trick.length !== 4) {
    throw new Error(`Tried to calculate trick: ${JSON.stringify(trick)}`);
  }

  let winningIndex = 0;
  let winningCard = trick[0];

  trick.map((card, index) => {
    if (index === 0) {
      return;
    }

    const trumpVsNonTrump =
      card.strain === trump && winningCard.strain !== trump;

    const sameStrainHigherCard =
      card.strain === winningCard.strain && card.level < winningCard.level;

    if (sameStrainHigherCard || trumpVsNonTrump) {
      winningCard = card;
      winningIndex = index;
    }
  });

  return (winningIndex + directionIndex) % Constants.ALL_COMPASS.length;
}

export function playableCards(trick: CanonicalCard[], hand: CanonicalCard[]) {
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
