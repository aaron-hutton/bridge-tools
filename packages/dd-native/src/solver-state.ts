import { type Types } from "@bridge-tools/core";
import { type CanonicalCard } from "./canonical-card";

export interface SolverState {
  deal: CanonicalCard[][];
  trick: CanonicalCard[];
  direction: number;
  currentTricks: number;
  problemSize: number;
  trump: Types.SuitOrNT;
}

export function isNS(direction: number) {
  return direction === 0 || direction === 2;
}
