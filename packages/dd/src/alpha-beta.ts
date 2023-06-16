import { Board, Deal, Hand, Trick, type Types } from "@bridge-tools/core";

export function advance(
  deal: Types.Deal,
  trick: Types.Trick,
  contract: Types.PlayableContract,
  direction: Types.Compass,
  NSalpha: number,
  NSbeta: number,
  currentTricks: number,
  cardToPlay: Types.Card
) {
  const newDeal = Deal.clone(deal);
  newDeal[direction] = Hand.removeCard(newDeal[direction], cardToPlay);

  const newTrick = [...trick, cardToPlay];

  if (newTrick.length === 4) {
    const winner = Trick.evaluate(
      newTrick,
      Board.rotateClockwise(direction, 1),
      contract.strain
    );
    const newTricks = currentTricks + (Board.isNorthSouth(winner) ? 1 : 0);
    return search(newDeal, [], contract, winner, NSalpha, NSbeta, newTricks);
  } else {
    return search(
      newDeal,
      newTrick,
      contract,
      Board.rotateClockwise(direction, 1),
      NSalpha,
      NSbeta,
      currentTricks
    );
  }
}

export function search(
  deal: Types.Deal,
  trick: Types.Trick,
  contract: Types.PlayableContract,
  direction: Types.Compass,
  NSalpha: number,
  NSbeta: number,
  currentTricks: number
) {
  if (deal[direction].length === 0) {
    return currentTricks;
  }

  const playableCards = Trick.generatePlayableCards(trick, deal[direction]);
  let currentAlpha = NSalpha;
  let currentBeta = NSbeta;

  if (Board.isNorthSouth(direction)) {
    let maxTricks = -1;
    for (const card of playableCards) {
      maxTricks = Math.max(
        maxTricks,
        advance(
          deal,
          trick,
          contract,
          direction,
          currentAlpha,
          currentBeta,
          currentTricks,
          card
        )
      );

      if (maxTricks > currentBeta) {
        break;
      }

      currentAlpha = Math.max(currentAlpha, maxTricks);
    }
    return maxTricks;
  } else {
    let minTricks = 1000;
    for (const card of playableCards) {
      minTricks = Math.min(
        minTricks,
        advance(
          deal,
          trick,
          contract,
          direction,
          currentAlpha,
          currentBeta,
          currentTricks,
          card
        )
      );

      if (minTricks < currentAlpha) {
        break;
      }

      currentBeta = Math.min(currentBeta, minTricks);
    }
    return minTricks;
  }
}
