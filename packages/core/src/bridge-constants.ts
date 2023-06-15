import { type Compass, type Suit, type SuitOrNT } from "./types";

export const CARDS_IN_SUIT = 13;

export const CARDS_IN_HAND = 13;
export const NUMBER_OF_SUITS = 4;
export const CARDS_IN_DEAL = NUMBER_OF_SUITS * CARDS_IN_HAND;

export const BIDS_PER_LEVEL = 5;

export const CONTRACT_BOOK = 6;

export const CARDS_IN_TRICK = 4;

export const COMPASS_DIRECTIONS = 4;

export const VULNERABILITIES = 16;

export const LARGEST_BID_LEVEL = 7;

export const ALL_COMPASS: Compass[] = ["N", "E", "S", "W"];
export const ALL_SUITS: Suit[] = ["S", "H", "D", "C"];
export const ALL_SUITS_NT: SuitOrNT[] = ["NT", "S", "H", "D", "C"];
