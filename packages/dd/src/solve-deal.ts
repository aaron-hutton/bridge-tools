import { Board, type Types } from "@bridge-tools/core";
import { search } from "./alpha-beta";
import { convertDealToCanonical } from "./canonical-card";
import { COMPASS_TO_NUMBER } from "./compass-map";

export function solveDeal(deal: Types.Deal, contract: Types.PlayableContract) {
  return search(
    {
      deal: convertDealToCanonical(deal),
      trick: [],
      trump: contract.strain,
      direction: COMPASS_TO_NUMBER[Board.rotateClockwise(contract.declarer, 1)],
      currentTricks: 0,
      problemSize: deal.N.length,
    },
    -1,
    1000,
    new Map()
  );
}
