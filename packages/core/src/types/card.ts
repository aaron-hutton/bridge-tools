import { Suit } from './suit';

export enum Rank {
	Ace = 'A',
	King = 'K',
	Queen = 'Q',
	Jack = 'J',
	Ten = 'T',
	Nine = '9',
	Eight = '8',
	Seven = '7',
	Six = '6',
	Five = '5',
	Four = '4',
	Three = '3',
	Two = '2',
}

export type Card = { suit: Suit; rank: Rank };
export type Trick = Card[];
