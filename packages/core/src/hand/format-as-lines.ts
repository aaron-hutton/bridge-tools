import { filterBySuit } from ".";
import { stringifyRanks } from "../string-parser";
import { type Hand } from "../types";

/**
 * Converts a hand to a list of strings orderd by suit
 * @param hand Hand to convert into list
 * @returns List of suit holdings in the hand ordered by suit
 */
export function formatHandAsLines(hand: Hand): string[] {
  const spades = stringifyRanks(
    filterBySuit(hand, "S").map((card) => card.rank)
  );
  const hearts = stringifyRanks(
    filterBySuit(hand, "H").map((card) => card.rank)
  );
  const diamonds = stringifyRanks(
    filterBySuit(hand, "D").map((card) => card.rank)
  );
  const clubs = stringifyRanks(
    filterBySuit(hand, "C").map((card) => card.rank)
  );
  return [spades, hearts, diamonds, clubs];
}
