import { type Types } from "@bridge-tools/core";
import { search } from "./alpha-beta";
import { convertDealToCanonical } from "./canonical-card";
import { COMPASS_TO_NUMBER } from "./compass-map";

export function solvePartial(
  deal: Types.Deal,
  trick: Types.Trick,
  contract: Types.PlayableContract,
  direction: Types.Compass
) {
  const canonicalDeal = convertDealToCanonical(deal);

  return search(
    {
      deal: canonicalDeal,
      trick: [],
      trump: contract.strain,
      direction: COMPASS_TO_NUMBER[direction],
      currentTricks: 0,
      problemSize: deal.N.length,
    },
    -1,
    1000,
    new Map()
  );
}
