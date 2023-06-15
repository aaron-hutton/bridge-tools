import { Types } from "@bridge-tools/core";

export const EMPTY_DEAL: Types.Deal = {
  N: [],
  E: [],
  S: [],
  W: [],
};

export const COMPASS_BOARD_ORDER: Types.Compass[] = ["N", "W", "E", "S"];
export const COMPASS_DISPLAY_ORDER: Types.Compass[] = ["W", "N", "E", "S"];

export const PLACEHOLDER_CARD: Types.Card = {
  rank: "A",
  suit: "S",
};
