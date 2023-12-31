import { countSuit } from ".";
import { type Hand } from "../types";

/**
 * This can be used to measure the exact distribution of a hand.
 * The list will the number of cards in each suit.
 * The list is in the order of [S, H, D, C]
 * @param hand The hand to measure the distribution of
 * @returns The length of each suit in order
 */
export function exactDistribution(hand: Hand) {
  return [
    countSuit(hand, "S"),
    countSuit(hand, "H"),
    countSuit(hand, "D"),
    countSuit(hand, "C"),
  ];
}
