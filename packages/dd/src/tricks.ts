import { type Types } from "@bridge-tools/core";
import { doubleDummySolve } from "./dd";

/**
 * Calculates the maximum number of tricks available for the current player
 * @param deal The deal to solve
 * @param trick Any cards played to the current trick
 * @param toPlay The player to play next
 * @param trump The trump suit
 * @returns The maximum number of remaining tricks the player can take
 */
export async function doubleDummySolveTricks(
  deal: Types.Deal,
  trick: Types.Trick,
  toPlay: Types.Compass,
  trump: Types.SuitOrNT
) {
  const solutions = await doubleDummySolve(deal, trick, toPlay, trump);

  let maxTricks = 0;
  solutions.forEach(({ result }) => {
    if (result > maxTricks) {
      maxTricks = result;
    }
  });

  return maxTricks;
}
