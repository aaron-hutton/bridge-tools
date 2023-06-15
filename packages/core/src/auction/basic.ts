import { BIDS_PER_LEVEL } from "../bridge-constants";
import { type Bid, type Call, type SuitOrNT } from "../types";
import { findOrThrow } from "../utils/object";

const BIDDABLE_SUIT_TO_NUMBER: Record<SuitOrNT, number> = {
  C: 0,
  D: 1,
  H: 2,
  S: 3,
  NT: 4,
};

/**
 * This is simply a Type-Guard function, it does not check the bid is actually valid.
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */
export function isBid(call: Call): call is Bid {
  return (call as Bid).suit !== undefined;
}

/**
 * Convert a biddable suit (NT, S, H, D, C) into a number
 */
export function biddableSuitToNumber(suit: SuitOrNT): number {
  return findOrThrow(
    BIDDABLE_SUIT_TO_NUMBER,
    suit,
    `Unexpected biddable suit: ${suit}`
  );
}

/**
 * Convert an actual bid into a number
 */
export function bidToNumber(bid: Bid): number {
  return (bid.level - 1) * BIDS_PER_LEVEL + biddableSuitToNumber(bid.suit);
}
