import { Types } from "@bridge-tools/core";
import { atom } from "jotai";
import { focusAtom } from "jotai-optics";

export const boardAtom = atom<Types.FullBoard>({
  deal: { N: [], E: [], S: [], W: [] },
  vulnerability: Types.Vulnerability.NvNv,
  num: 1,
  dealer: Types.Compass.North,
  turn: Types.Compass.North,
  auction: [],
  contract: null,
  remainingCards: { N: [], E: [], S: [], W: [] },
  trick: [],
  play: [],
  tricksNS: 0,
  tricksEW: 0,
  players: { N: "", E: "", S: "", W: "" },
  claimedTricks: 0,
  result: null,
} as Types.FullBoard);

export const auctionAtom = focusAtom(boardAtom, (o) => o.prop("auction"));
export const dealAtom = focusAtom(boardAtom, (o) => o.prop("deal"));
export const contractAtom = focusAtom(boardAtom, (o) => o.prop("contract"));
export const vulnerabilityAtom = focusAtom(boardAtom, (o) =>
  o.prop("vulnerability")
);
export const boardNumberAtom = focusAtom(boardAtom, (o) => o.prop("num"));
export const dealerAtom = focusAtom(boardAtom, (o) => o.prop("dealer"));
export const playersAtom = focusAtom(boardAtom, (o) => o.prop("players"));
export const turnAtom = focusAtom(boardAtom, (o) => o.prop("turn"));
export const playAtom = focusAtom(boardAtom, (o) => o.prop("play"));
export const trickAtom = focusAtom(boardAtom, (o) => o.prop("trick"));
export const tricksNSAtom = focusAtom(boardAtom, (o) => o.prop("tricksNS"));
export const tricksEWAtom = focusAtom(boardAtom, (o) => o.prop("tricksEW"));
export const boardResultAtom = focusAtom(boardAtom, (o) => o.prop("result"));
export const claimedTricksAtom = focusAtom(boardAtom, (o) =>
  o.prop("claimedTricks")
);
export const remainingCardsAtom = focusAtom(boardAtom, (o) =>
  o.prop("remainingCards")
);
