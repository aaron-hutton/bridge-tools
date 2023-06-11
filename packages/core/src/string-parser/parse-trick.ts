import { Trick } from '../types';
import { parseCard } from './parse-card';

/**
 * Parse a single trick during the cardplay. It will be trimmed,
 * but must have at most 8 characters of content.
 * @param str The string for a single trick
 * @returns The trick or an error if it cannot be parsed
 */
export function parseTrick(str: string): Trick {
	const trimmed = str.trim();

	if (trimmed.length > 8) {
		throw new Error(`Error occurred parsing trick: ${trimmed}`);
	}

	const trick: Trick = [];
	for (let i = 0; i < trimmed.length; i += 2) {
		const card = parseCard(trimmed.slice(i, i + 2));
		trick.push(card);
	}

	return trick;
}
