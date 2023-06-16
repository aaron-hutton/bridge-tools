import { Board, type Types } from "@bridge-tools/core";
import { search } from "./alpha-beta";

export function solveDeal(deal: Types.Deal, contract: Types.PlayableContract) {
  return search(
    deal,
    [],
    contract,
    Board.rotateClockwise(contract.declarer, 1),
    -1,
    1000,
    0
  );
}
