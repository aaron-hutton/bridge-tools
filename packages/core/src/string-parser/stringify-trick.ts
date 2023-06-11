import { Trick } from '../types';
import { stringifyCard } from './stringify-card';

/**
 * Convert a trick into a string
 * @param trick The trick to be converted
 * @returns A string representing the given trick
 */
export function stringifyTrick(trick: Trick): string {
	return trick.map((card) => stringifyCard(card)).join('');
}
