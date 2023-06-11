import { Compass } from './compass';
import { NoTrumpType, Suit } from './suit';

export interface PlayableContract {
	level: number;
	strain: Suit | NoTrumpType;

	declarer: Compass;

	doubled?: boolean;
	redoubled?: boolean;
}

export type Contract = 'Passout' | PlayableContract;
