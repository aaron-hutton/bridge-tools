import { type SuitOrNT } from "./suit";

export interface Bid {
  level: number;
  suit: SuitOrNT;
}

export type Pass = "P";
export type Double = "X";
export type Redouble = "XX";

export type NonBid = Pass | Double | Redouble;

export type Call = NonBid | Bid;

export interface AuctionCall {
  call: Call;

  alert?: boolean;
  explanation?: string;
  timing?: number;
}
