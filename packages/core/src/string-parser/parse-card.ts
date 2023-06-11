import { parseRanks } from '.';
import { Card } from '../types';
import { parseSuit } from './parse-suit';

/**
 * Parse a single card. It will be represented by suit then rank, e.g. SA for ace of spades
 * @param str The string for a single card
 * @returns The card or an error if it cannot be parsed
 */
export function parseCard(str: string): Card {
	const suit = parseSuit(str[0] ?? '');
	const ranks = parseRanks(str[1] ?? '');

	if (ranks.length !== 1) {
		throw new Error(`Failed to parse card with string: ${str}`);
	}

	return { suit, rank: ranks[0] };
}
