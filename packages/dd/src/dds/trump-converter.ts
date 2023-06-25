import { type Types } from "@bridge-tools/core";

const SUIT_TO_DDS: Record<Types.SuitOrNT, number> = {
  S: 0,
  H: 1,
  D: 2,
  C: 3,
  NT: 4,
};

export function convertTrumpToDDS(trump: Types.SuitOrNT) {
  return SUIT_TO_DDS[trump];
}
