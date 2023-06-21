import { type Types } from "@bridge-tools/core";

export interface CanonicalCard {
  strain: Types.Suit;
  level: number;
  count: number;
}

export type CanonicalTrick = CanonicalCard[];
export type CanonicalHand = CanonicalCard[];
export type CanonicalDeal = CanonicalHand[];
