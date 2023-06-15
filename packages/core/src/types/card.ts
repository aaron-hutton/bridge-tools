import { type Suit } from "./suit";

export type Ace = "A";
export type King = "K";
export type Queen = "Q";
export type Jack = "J";
export type Ten = "T";
export type Nine = "9";
export type Eight = "8";
export type Seven = "7";
export type Six = "6";
export type Five = "5";
export type Four = "4";
export type Three = "3";
export type Two = "2";

export type Rank =
  | Ace
  | King
  | Queen
  | Jack
  | Ten
  | Nine
  | Eight
  | Seven
  | Six
  | Five
  | Four
  | Three
  | Two;

export type Card = { suit: Suit; rank: Rank };
export type Trick = Card[];
