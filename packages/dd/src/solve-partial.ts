import { type Types } from "@bridge-tools/core";
import { search } from "./alpha-beta";

export function solvePartial(
  deal: Types.Deal,
  trick: Types.Trick,
  contract: Types.PlayableContract,
  direction: Types.Compass
) {
  return search(deal, trick, contract, direction, -1, 1000, 0);
}
