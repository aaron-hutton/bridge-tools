import type { Types } from "@bridge-tools/core";
import { atom } from "jotai";

export const calculateVulnerabilityAtom = atom(true);
export const calculateDealerAtom = atom(true);

export const selectedHandAtom = atom<Types.Compass | null>(null);

export const dealCompleteAtom = atom(false);
