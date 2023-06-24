import { Constants } from "@bridge-tools/core";
import {
  evaluateTrick,
  hashCanonicalDeal,
  playableCards,
  type CanonicalCard,
} from "../canonical-card";
import { isNS } from "../solver-state";
import { type Bounds, type ZeroWindowState } from "./state";

export let upperBoundHit = 0;
export let lowerBoundHit = 0;

export function solveFinalTrick(state: ZeroWindowState) {
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
  state: ZeroWindowState,
  cardToPlay: CanonicalCard,
  target: number,
  depth: number,
  memo: Map<string, Bounds>
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

  let retval = false;

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

    retval = zeroWindowSearch(state, target, depth - 1, memo);

    state.trick = initialTrick;
    state.currentTricks = initialNSTricks;
    state.direction = initialDirection;
  } else {
    const initialDirection = state.direction;
    state.direction = (state.direction + 1) % 4;

    retval = zeroWindowSearch(state, target, depth, memo);

    state.direction = initialDirection;
  }

  state.trick.pop();

  if (cardToPlay.count === 0) {
    state.deal[state.direction].splice(canonicalIndex, 0, cardToPlay);
  }

  cardToPlay.count++;
  return retval;
}

export function zeroWindowSearch(
  state: ZeroWindowState,
  target: number,
  depth: number,
  memo: Map<string, Bounds>
): boolean {
  let hash: string | null = null;

  const currentHand = state.deal[state.direction];

  if (state.trick.length === 0) {
    if (state.currentTricks >= target) {
      return true;
    } else if (state.currentTricks + depth < target) {
      return false;
    }

    // QuickTricks
    // LaterTricks

    hash = hashCanonicalDeal(state.deal, state.direction);
    const lookup = memo.get(hash) ?? {};
    const min = lookup.min ?? 0;
    if (min + state.currentTricks >= target) {
      upperBoundHit++;
      return true;
    }

    const max = lookup.max ?? Constants.CARDS_IN_HAND;
    if (max + state.currentTricks < target) {
      lowerBoundHit++;
      return false;
    }

    if (currentHand.length === 1 && currentHand[0].count === 1) {
      const finalTrickResult = solveFinalTrick(state);
      memo.set(hash, { min: finalTrickResult, max: finalTrickResult });

      const success = target === finalTrickResult;
      return success;
    }
  }

  const playable = playableCards(
    state.deal,
    state.trick,
    currentHand,
    state.trump
  );

  let result = false;

  if (isNS(state.direction)) {
    for (const card of playable) {
      const res = advance(state, card, target, depth, memo);

      if (res) {
        result = true;
      }
    }
  } else {
    result = true;

    for (const card of playable) {
      const res = advance(state, card, target, depth, memo);

      if (!res) {
        result = false;
      }
    }
  }

  if (hash !== null) {
    const lookup = memo.get(hash) ?? {};
    if (result) {
      memo.set(hash, { ...lookup, min: target });
    } else {
      memo.set(hash, { ...lookup, max: target - 1 });
    }
  }
  return result;
}
