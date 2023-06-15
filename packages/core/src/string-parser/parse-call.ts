import { parseSuit } from ".";
import { type Types } from "..";
import { LARGEST_BID_LEVEL } from "../bridge-constants";
import { type AuctionCall } from "../types";

/**
 * Checks strain of bid for NT or a suit
 * @param str Letter denoting suit or NT
 * @returns NT or Suit type
 */
function parseStrain(str: string): Types.SuitOrNT {
  return str === "n" || str === "N" || str === "nt" || str === "NT"
    ? "NT"
    : parseSuit(str);
}

/**
 * Parses a single call in an auction. It can either be a bid or a call
 * @param bid A string of the call to be parsed.
 * @returns AuctionCall.call object or an error if it can't be parsed
 */

export function parseCall(bid: string): AuctionCall {
  const upperCaseBid = bid.toUpperCase();
  if (upperCaseBid === "P" || upperCaseBid === "X" || upperCaseBid === "XX") {
    return { call: upperCaseBid };
  }

  const level = Number.parseInt(bid);
  const strain = bid.slice(1);
  if (level > 0 && level <= LARGEST_BID_LEVEL) {
    return { call: { level, suit: parseStrain(strain) } };
  } else {
    throw new Error(`Failed to parse Call with string: ${bid}`);
  }
}
