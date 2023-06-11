import { calculateVulnerability, isDirectionVulnerable } from '.';
import { Compass } from '../types';
/**
 * Checks if player is vulnerable or not on the board
 * @param boardNumber Number of board
 * @param direction Position of player
 * @returns Boolean whether player is vulnerable or not
 */
export function isPlayerVulnerableOnBoard(
	boardNumber: number,
	direction: Compass
): boolean {
	const vul = calculateVulnerability(boardNumber);
	return isDirectionVulnerable(direction, vul);
}
