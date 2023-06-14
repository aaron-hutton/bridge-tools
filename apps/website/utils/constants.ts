import { Types } from "@bridge-tools/core";

export const EMPTY_DEAL: Types.Deal = {
  [Types.Compass.North]: [],
  [Types.Compass.East]: [],
  [Types.Compass.South]: [],
  [Types.Compass.West]: [],
};

export const COMPASS_BOARD_ORDER: Types.Compass[] = [
  Types.Compass.North,
  Types.Compass.West,
  Types.Compass.East,
  Types.Compass.South,
];
export const COMPASS_DISPLAY_ORDER: Types.Compass[] = [
  Types.Compass.West,
  Types.Compass.North,
  Types.Compass.East,
  Types.Compass.South,
];

export const PLACEHOLDER_CARD: Types.Card = {
  rank: Types.Rank.Ace,
  suit: Types.Suit.Spade,
};
