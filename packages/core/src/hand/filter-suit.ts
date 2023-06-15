import { type Card, type Hand, type Suit } from "../types";

export function filterBySuit(hand: Hand, suit: Suit): Card[] {
  return hand.filter((card) => card.suit === suit);
}
