import { type Types } from "@bridge-tools/core";

const DDS_TO_SUIT: Record<number, Types.Suit> = {
  0: "S",
  1: "H",
  2: "D",
  3: "C",
};

const SUIT_TO_DDS: Record<Types.Suit, number> = {
  S: 0,
  H: 1,
  D: 2,
  C: 3,
};

const DDS_TO_RANK: Record<number, Types.Rank> = {
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "T",
  11: "J",
  12: "Q",
  13: "K",
  14: "A",
};

const RANK_TO_DDS: Record<Types.Rank, number> = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

export function convertCardToDDS(card?: Types.Card) {
  if (card === undefined) {
    return { rank: 0, suit: 0 };
  }

  return { rank: RANK_TO_DDS[card.rank], suit: SUIT_TO_DDS[card.suit] };
}

export function convertCardFromDDS(card: { rank: number; suit: number }) {
  return { rank: DDS_TO_RANK[card.rank], suit: DDS_TO_SUIT[card.suit] };
}
