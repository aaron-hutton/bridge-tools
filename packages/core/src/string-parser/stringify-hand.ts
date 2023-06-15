import { stringifyRanks } from ".";
import { type Hand } from "../types";

/**
 * Convert a hand into a string
 * @param hand The hand to be converted
 * @returns A string representing the given hand
 */
export function stringifyHand(hand: Hand): string {
  const spadeStr = stringifyRanks(
    hand.filter((c) => c.suit === "S").map((c) => c.rank)
  );
  const heartStr = stringifyRanks(
    hand.filter((c) => c.suit === "H").map((c) => c.rank)
  );
  const diamondStr = stringifyRanks(
    hand.filter((c) => c.suit === "D").map((c) => c.rank)
  );
  const clubStr = stringifyRanks(
    hand.filter((c) => c.suit === "C").map((c) => c.rank)
  );

  return spadeStr + "." + heartStr + "." + diamondStr + "." + clubStr;
}
