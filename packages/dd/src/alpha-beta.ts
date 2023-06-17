import {
  evaluateTrick,
  playableCards,
  type CanonicalCard,
} from "./canonical-card";
import { isNS, type SolverState } from "./solver-state";

export function solveFinalTrick(state: SolverState) {
  const trick = [
    state.deal[state.direction][0],
    state.deal[(state.direction + 1) % 4][0],
    state.deal[(state.direction + 2) % 4][0],
    state.deal[(state.direction + 3) % 4][0],
  ];

  const winner = evaluateTrick(trick, state.trump, state.direction);
  return state.currentTricks + (isNS(winner) ? 1 : 0);
}

export function advance(state: SolverState, cardToPlay: CanonicalCard) {
  let canonicalIndex = -1;
  cardToPlay.count--;

  if (cardToPlay.count === 0) {
    canonicalIndex = state.deal[state.direction].findIndex(
      (c) => c === cardToPlay
    );
    state.deal[state.direction].splice(canonicalIndex, 1);
  }

  state.trick.push(cardToPlay);

  let retval = -1;

  if (state.trick.length === 4) {
    const initialTrick = state.trick;
    const initialNSTricks = state.currentTricks;
    const initialDirection = state.direction;

    const winner = evaluateTrick(
      state.trick,
      state.trump,
      (state.direction + 1) % 4
    );
    state.currentTricks = state.currentTricks + (isNS(winner) ? 1 : 0);
    state.direction = winner;
    state.trick = [];

    retval = search(state);

    state.trick = initialTrick;
    state.currentTricks = initialNSTricks;
    state.direction = initialDirection;
  } else {
    const initialDirection = state.direction;
    state.direction = (state.direction + 1) % 4;

    retval = search(state);

    state.direction = initialDirection;
  }

  state.trick.pop();

  if (cardToPlay.count === 0) {
    state.deal[state.direction].splice(canonicalIndex, 0, cardToPlay);
  }

  cardToPlay.count++;
  return retval;
}

export function search(state: SolverState) {
  const currentHand = state.deal[state.direction];
  if (currentHand.length === 1 && currentHand[0].count === 1) {
    return solveFinalTrick(state);
  }

  const playable = playableCards(state.trick, currentHand);
  let currentAlpha = state.alpha;
  let currentBeta = state.beta;

  if (isNS(state.direction)) {
    let maxTricks = -1;
    for (const card of playable) {
      maxTricks = Math.max(maxTricks, advance(state, card));

      if (maxTricks > currentBeta) {
        break;
      }

      currentAlpha = Math.max(currentAlpha, maxTricks);
    }
    return maxTricks;
  } else {
    let minTricks = 1000;
    for (const card of playable) {
      minTricks = Math.min(minTricks, advance(state, card));

      if (minTricks < currentAlpha) {
        break;
      }

      currentBeta = Math.min(currentBeta, minTricks);
    }
    return minTricks;
  }
}
