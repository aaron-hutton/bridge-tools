import { Trick } from '../types';
import { parseTrick } from './parse-trick';

/**
 * Parse the cardplay of a single hand. Tricks are made up of contiguous cards.
 * Tricks are separated by a comma.
 * @param str The string representing the cardplay
 * @returns The list of tricks or an error if it cannot be parsed
 */
export function parseCardPlay(str: string): Trick[] {
	return str
		.trim()
		.split(',')
		.map((trick) => parseTrick(trick));
}
