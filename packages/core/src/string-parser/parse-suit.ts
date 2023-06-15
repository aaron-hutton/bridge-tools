import { type Suit } from "../types";
import { findOrThrow } from "../utils/object";

const STRING_SUIT_TO_SUIT: Record<string, Suit> = {
  S: "S",
  s: "S",
  H: "H",
  h: "H",
  D: "D",
  d: "D",
  C: "C",
  c: "C",
};

/**
 * Parse a single suit
 * @param str The string for a single suit
 * @returns The suit or an error if it cannot be parsed
 */
export function parseSuit(str: string): Suit {
  return findOrThrow<string, Suit>(
    STRING_SUIT_TO_SUIT,
    str,
    `Failed to parse suit with string: ${str}`
  );
}
