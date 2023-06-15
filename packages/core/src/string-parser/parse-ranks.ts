import { type Rank } from "../types";
import { findOrThrow } from "../utils/object";

const STRING_RANK_TO_RANK: Record<string, Rank> = {
  A: "A",
  a: "A",
  K: "K",
  k: "K",
  Q: "Q",
  q: "Q",
  J: "J",
  j: "J",
  T: "T",
  t: "T",
  9: "9",
  8: "8",
  7: "7",
  6: "6",
  5: "5",
  4: "4",
  3: "3",
  2: "2",
};

/**
 * Parse a single suit into a list of it's ranks. e.g. KQT7
 * becomes an array containing King, Queen, Ten, Seven
 * @param str The string for a single suit
 * @returns An array with the ranks of that suit, or an error if it cannot be parsed
 */
export function parseRanks(str: string): Rank[] {
  const hand: Rank[] = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.trim() === "") {
      continue;
    }

    if (char === "1") {
      if (str[i + 1] === "0") {
        hand.push("T");
        i += 1;
        continue;
      }
    } else {
      const rank = findOrThrow(
        STRING_RANK_TO_RANK,
        char,
        `Unexpected character: ${char}. Failed to parse ranks.`
      );
      hand.push(rank);
    }
  }

  return hand;
}
