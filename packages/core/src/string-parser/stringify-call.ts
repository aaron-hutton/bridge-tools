import { stringifySuit } from ".";
import { type AuctionCall, type SuitOrNT } from "../types";

/**
 * Converts the strain of a bid to a string
 * @param strain Suit or NoTrump type
 * @returns String of the relevant strain
 */
function stringifyStrain(strain: SuitOrNT): string {
  return strain === "NT" ? "NT" : stringifySuit(strain);
}
/**
 * Makes a call object into a string
 * @param bid Either a bid or possible call
 * @returns String representation of the call
 */
export function stringifyCall(bid: AuctionCall): string {
  if (bid.call === "P" || bid.call === "X" || bid.call === "XX") {
    return bid.call;
  }

  return bid.call.level.toString() + stringifyStrain(bid.call.suit);
}
