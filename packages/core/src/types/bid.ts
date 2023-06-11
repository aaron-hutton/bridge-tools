import { NoTrumpType, Suit } from './suit';

export interface Bid {
	level: number;
	suit: Suit | NoTrumpType;
}

export enum PossibleCalls {
	Pass = 'P',
	Double = 'X',
	Redouble = 'XX',
}

export type Call = PossibleCalls | Bid;

export interface AuctionCall {
	call: Call;

	alert?: boolean;
	explanation?: string;
	timing?: number;
}
