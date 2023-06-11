import { Trick } from '../types';
import { stringifyTrick } from './stringify-trick';

/**
 * Convert the cardplay into a string
 * @param play The cardplay to be converted
 * @returns A string representing the cardplay
 */
export function stringifyCardPlay(play: Trick[]): string {
	return play.map((trick) => stringifyTrick(trick)).join(',');
}
