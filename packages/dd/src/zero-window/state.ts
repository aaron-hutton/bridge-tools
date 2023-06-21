import { type Types } from "@bridge-tools/core";
import { type CanonicalCard } from "../canonical-card";

export interface ZeroWindowState {
  deal: CanonicalCard[][];
  trick: CanonicalCard[];
  direction: number;
  currentTricks: number;
  trump: Types.SuitOrNT;
}

export interface Bounds {
  min?: number;
  max?: number;
}
