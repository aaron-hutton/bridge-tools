import type { Types } from "@bridge-tools/core";
import { atom } from "jotai";

//Represents the number of cards which have been played out
export const positionAtom = atom(0);
export const playedCardsAtom = atom<Types.Card[]>([]);
export const playedTricksNSAtom = atom(0);
export const playedTricksEWAtom = atom(0);
