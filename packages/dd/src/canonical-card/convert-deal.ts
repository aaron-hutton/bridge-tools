import { Constants, Deal, type Types } from "@bridge-tools/core";
import { COMPASS_TO_NUMBER } from "../compass-map";
import { type CanonicalDeal, type CanonicalHand } from "./type";

const lengthConstructor: [Types.Suit, number][] = [
  ["S", 0],
  ["H", 0],
  ["D", 0],
  ["C", 0],
];

export function convertDealToCanonical(inputDeal: Types.Deal): CanonicalDeal {
  const deal: CanonicalHand[] = [[], [], [], []];
  const lengths: Map<Types.Suit, number>[] = [
    new Map(lengthConstructor),
    new Map(lengthConstructor),
    new Map(lengthConstructor),
    new Map(lengthConstructor),
  ];

  Constants.ALL_SUITS.map((suit) => {
    let currentLevel = 0;
    let lastDirection: Types.Compass | null = null;
    Constants.ALL_CARD_RANKS.map((rank) => {
      const direction = Deal.findCard(inputDeal, { rank, suit });
      if (direction === null) {
        // The deal is incomplete
        return;
      }

      const directionIndex = COMPASS_TO_NUMBER[direction];
      const hand = deal[directionIndex];
      if (direction === lastDirection) {
        hand[hand.length - 1].count++;
      } else {
        currentLevel++;
        hand.push({ strain: suit, level: currentLevel, count: 1 });
        lastDirection = direction;
      }

      const currentLength = lengths[directionIndex].get(suit) ?? 0;
      lengths[directionIndex].set(suit, currentLength + 1);
    });
  });

  return { deal, lengths };
}
