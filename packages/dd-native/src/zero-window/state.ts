import { type Types } from "@bridge-tools/core";
import { type CanonicalDeal, type CanonicalTrick } from "../canonical-card";

export interface ZeroWindowState {
  deal: CanonicalDeal;
  trick: CanonicalTrick;
  direction: number;
  currentTricks: number;
  trump: Types.SuitOrNT;
}

export interface Bounds {
  min?: number;
  max?: number;
}
