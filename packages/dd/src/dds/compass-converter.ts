import { type Types } from "@bridge-tools/core";

const COMPASS_TO_DDS: Record<Types.Compass, number> = {
  N: 0,
  E: 1,
  S: 2,
  W: 3,
};

export function convertCompassToDDS(direction: Types.Compass) {
  return COMPASS_TO_DDS[direction];
}
