import { stringifyRanks } from '.';
import { Card } from '../types';

/**
 * Convert a card into a string
 * @param card The card to be converted
 * @returns A string representing the given card
 */
export function stringifyCard(card: Card): string {
	return card.suit + stringifyRanks([card.rank]);
}
