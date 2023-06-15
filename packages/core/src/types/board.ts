import { type AuctionCall } from "./bid";
import { type BoardResult } from "./board-result";
import { type Trick } from "./card";
import { type Compass } from "./compass";
import { type Contract } from "./contract";
import { type Deal } from "./deal";
import { type Vulnerability } from "./vulnerability";

export interface Player {
  name?: string;
  id?: string;
}

export interface BasicBoard {
  deal: Deal;

  vulnerability: Vulnerability;
  num: number;
  dealer: Compass;
}

export interface FullBoard extends BasicBoard {
  turn: Compass;

  auction: AuctionCall[];

  contract: Contract | null;
  remainingCards: Deal;
  trick: Trick;
  play: Trick[];
  claimedTricks?: number;

  tricksNS: number;
  tricksEW: number;

  players: Record<Compass, Player>;

  result: BoardResult | null;
}
