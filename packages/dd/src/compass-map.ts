import { type Types } from "@bridge-tools/core";

export const COMPASS_TO_NUMBER: Record<Types.Compass, number> = {
  N: 0,
  E: 1,
  S: 2,
  W: 3,
};

export const NUMBER_TO_COMPASS: Record<number, Types.Compass> = {
  0: "N",
  1: "E",
  2: "S",
  3: "W",
};
