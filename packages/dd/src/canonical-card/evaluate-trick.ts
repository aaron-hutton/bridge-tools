import { Constants, type Types } from "@bridge-tools/core";
import { type CanonicalTrick } from "./type";

export function evaluateTrick(
  trick: CanonicalTrick,
  trump: Types.SuitOrNT,
  directionIndex: number
) {
  if (trick.length !== 4) {
    throw new Error(`Tried to calculate trick: ${JSON.stringify(trick)}`);
  }

  let winningIndex = 0;
  let winningCard = trick[0];

  trick.map((card, index) => {
    if (index === 0) {
      return;
    }

    const trumpVsNonTrump =
      card.strain === trump && winningCard.strain !== trump;

    const sameStrainHigherCard =
      card.strain === winningCard.strain && card.level < winningCard.level;

    if (sameStrainHigherCard || trumpVsNonTrump) {
      winningCard = card;
      winningIndex = index;
    }
  });

  return (winningIndex + directionIndex) % Constants.ALL_COMPASS.length;
}
