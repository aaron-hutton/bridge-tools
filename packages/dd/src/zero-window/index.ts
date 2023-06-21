import { type Types } from "@bridge-tools/core";
import { convertDealToCanonical } from "../canonical-card";
import { COMPASS_TO_NUMBER } from "../compass-map";
import { zeroWindowSearch } from "./search";
import { type Bounds, type ZeroWindowState } from "./state";

export function searchAll(
  deal: Types.Deal,
  trick: Types.Trick,
  trump: Types.SuitOrNT,
  direction: Types.Compass
) {
  const canonicalDeal = convertDealToCanonical(deal);
  const transitionTable = new Map<string, Bounds>();

  const state: ZeroWindowState = {
    currentTricks: 0,
    deal: canonicalDeal,
    direction: COMPASS_TO_NUMBER[direction],
    trick: [],
    trump,
  };

  let guess = deal.N.length / 2;
  const depth = deal.N.length;
  let upperBound = 13;
  let lowerBound = 0;

  while (lowerBound < upperBound) {
    let target = guess;
    if (guess === lowerBound) {
      target = guess + 1;
    }

    console.log(`ZWS with target ${target}, depth: ${depth}`);
    if (zeroWindowSearch(state, target, depth, transitionTable)) {
      console.log("Search success");
      lowerBound = target;
      guess = lowerBound;
    } else {
      console.log("Search fail");
      upperBound = target - 1;
      guess = upperBound;
    }
  }

  return guess;
}
