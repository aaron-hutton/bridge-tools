import { COMPASS_DIRECTIONS } from '../bridge-constants';
import { Compass } from '../types';
import { findOrThrow } from '../utils/object';

/** Board Vulnerability from NS perspective */
export const BOARD_TO_DEALER: Record<number, Compass> = {
	1: Compass.North,
	2: Compass.East,
	3: Compass.South,
	0: Compass.West,
};

/**
 * Calculates the compass direction which would be dealer on that board number
 * @param boardNumber Number of board
 * @returns The dealer on the specified board
 */
export function calculateDealer(boardNumber: number): Compass {
	const board = boardNumber % COMPASS_DIRECTIONS;
	return findOrThrow<number, Compass>(
		BOARD_TO_DEALER,
		board,
		`Failed to calculate dealer of board number ${boardNumber}`
	);
}
