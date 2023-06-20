import {
  evaluateTrick,
  hashCanonicalDeal,
  playableCards,
  type CanonicalCard,
} from "./canonical-card";
import { isNS, type SolverState } from "./solver-state";

export let cacheHit = 0;
export let cacheMiss = 0;
export let endPositionsReached = 0;

export function solveFinalTrick(state: SolverState) {
  endPositionsReached++;

  const trick = [
    state.deal[state.direction][0],
    state.deal[(state.direction + 1) % 4][0],
    state.deal[(state.direction + 2) % 4][0],
    state.deal[(state.direction + 3) % 4][0],
  ];

  const winner = evaluateTrick(trick, state.trump, state.direction);
  return state.currentTricks + (isNS(winner) ? 1 : 0);
}

export function advance(
  state: SolverState,
  cardToPlay: CanonicalCard,
  alpha: number,
  beta: number,
  memo: Map<string, number>
) {
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

    retval = search(state, alpha, beta, memo);

    state.trick = initialTrick;
    state.currentTricks = initialNSTricks;
    state.direction = initialDirection;
  } else {
    const initialDirection = state.direction;
    state.direction = (state.direction + 1) % 4;

    retval = search(state, alpha, beta, memo);

    state.direction = initialDirection;
  }

  state.trick.pop();

  if (cardToPlay.count === 0) {
    state.deal[state.direction].splice(canonicalIndex, 0, cardToPlay);
  }

  cardToPlay.count++;
  return retval;
}

export function search(
  state: SolverState,
  alpha: number,
  beta: number,
  memo: Map<string, number>
) {
  let hash = "";
  if (state.trick.length === 0) {
    hash = hashCanonicalDeal(state.deal, state.direction, state.trick);
    const memoValue = memo.get(hash);
    if (memoValue !== undefined) {
      cacheHit++;
      return memoValue;
    }
    cacheMiss++;
  }

  const currentHand = state.deal[state.direction];
  if (currentHand.length === 1 && currentHand[0].count === 1) {
    // console.log(JSON.stringify(state));
    // console.log("");
    const finalTrickResult = solveFinalTrick(state);
    memo.set(hash, finalTrickResult);
    return finalTrickResult;
  }

  let currentAlpha = alpha;
  let currentBeta = beta;

  const playable = playableCards(state.trick, currentHand);
  const remainingCards = state.problemSize - currentHand.length;

  if (isNS(state.direction)) {
    // If the minimum number of tricks that NS can get is greater than the best minimum already found, then we'll never take this route, so give up now
    if (state.currentTricks > beta) {
      return 1000;
    }

    let maxTricks = -1;
    for (const card of playable) {
      maxTricks = Math.max(
        maxTricks,
        advance(state, card, currentAlpha, currentBeta, memo)
      );

      if (maxTricks > currentBeta) {
        break;
      }

      currentAlpha = Math.max(currentAlpha, maxTricks);
    }

    if (state.trick.length === 0) {
      memo.set(hash, maxTricks);
    }

    return maxTricks;
  } else {
    // If the maximum number of tricks that NS can get is less than the best already found, then we'll never take this route, so give up now
    if (state.currentTricks + remainingCards < alpha) {
      return -1;
    }

    let minTricks = 1000;
    for (const card of playable) {
      minTricks = Math.min(
        minTricks,
        advance(state, card, currentAlpha, currentBeta, memo)
      );

      if (minTricks < currentAlpha) {
        break;
      }

      currentBeta = Math.min(currentBeta, minTricks);
    }

    if (state.trick.length === 0) {
      memo.set(hash, minTricks);
    }

    return minTricks;
  }
}
