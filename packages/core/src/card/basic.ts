import { BridgeToolsError } from "../assertion-error";
import {
  CARDS_IN_DEAL,
  CARDS_IN_HAND,
  CARDS_IN_SUIT,
} from "../bridge-constants";
import { type Card, type Rank, type Suit } from "../types";
import { findOrThrow, invert } from "../utils/object";

const RANK_TO_NUMBER: Record<Rank, number> = {
  A: 0,
  K: 1,
  Q: 2,
  J: 3,
  T: 4,
  "9": 5,
  "8": 6,
  "7": 7,
  "6": 8,
  "5": 9,
  "4": 10,
  "3": 11,
  "2": 12,
};
const NUMBER_TO_RANK = invert(RANK_TO_NUMBER);

const SUIT_TO_NUMBER: Record<Suit, number> = {
  S: 0,
  H: 1,
  D: 2,
  C: 3,
};

const NUMBER_TO_SUIT = invert(SUIT_TO_NUMBER);

/**
 * Convert a suit to a numerical value
 */
export function suitToNumber(suit: Suit): number {
  return findOrThrow(SUIT_TO_NUMBER, suit, `Unexpected suit: ${suit}`);
}

/**
 * Convert a numerical value to its corresponding suit
 */
export function numberToSuit(num: number): Suit {
  return findOrThrow(NUMBER_TO_SUIT, num, `Unexpected number for suit: ${num}`);
}

/**
 * Check if a suit is a minor
 */
export function isMinor(suit: Suit): boolean {
  return suit === "C" || suit === "D";
}

/**
 * Check if a suit is a major
 */
export function isMajor(suit: Suit): boolean {
  return suit === "H" || suit === "S";
}

/**
 * Compares the two ranks and determines which one is higher
 */
export function compareRank(rank1: Rank, rank2: Rank): number {
  const n1 = RANK_TO_NUMBER[rank1];
  const n2 = RANK_TO_NUMBER[rank2];

  if (n1 < n2) {
    return 1;
  }

  if (n1 === n2) {
    return 0;
  }

  return -1;
}

/**
 * Return a numberical value for the card from 0-51. The AS=0, the 2S=12 up to the 2C=51
 */
export function cardToNumber(card: Card): number {
  return RANK_TO_NUMBER[card.rank] + CARDS_IN_SUIT * suitToNumber(card.suit);
}
/**
 * Return a card associated with that numerical value
 */
export function numberToCard(cardNumber: number): Card {
  if (cardNumber < 0 || cardNumber >= CARDS_IN_DEAL) {
    throw new BridgeToolsError(`Tried to convert invalid card: ${cardNumber}`);
  }
  return {
    rank: NUMBER_TO_RANK[cardNumber % CARDS_IN_HAND],
    suit: numberToSuit(Math.floor(cardNumber / CARDS_IN_HAND)),
  };
}

/**
 * Check if two cards are the same
 */
export function equalCard(card1: Card, card2: Card) {
  return card1.rank === card2.rank && card1.suit === card2.suit;
}

/**
 * Returns the card with a rank 1 above the given card. Returns null if an ace is passed
 */
export function cardAbove(card: Card) {
  if (card.rank === "A") {
    return null;
  }

  return numberToCard(cardToNumber(card) - 1);
}

/**
 * Returns the card with a rank 1 below the given card. Returns null if a two is passed
 */
export function cardBelow(card: Card) {
  if (card.rank === "2") {
    return null;
  }

  return numberToCard(cardToNumber(card) + 1);
}
