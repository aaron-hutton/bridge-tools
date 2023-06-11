import { Constants } from '..';
import { formatHandAsLines } from '../hand';
import { Deal } from '../types';

/**
 * Calculates the required tab spacing between West and East hands to make all the suits align correctly
 * @param suitstr String of a suit
 * @returns String of tab characters to put into the deal output
 */
function calculateWestEastTabSpacing(suitstr: string): string {
	if (suitstr.length < 2) {
		return '\t'.repeat(6);
	} else if (suitstr.length > 9) {
		return '\t'.repeat(4);
	} else {
		return '\t'.repeat(5);
	}
}

/**
 * Writes a deal object as a string which can be printed.
 * @param deal Deal to be written as a string
 * @returns String object containing deal
 */
export function writeDealAsString(deal: Deal): string {
	const north = formatHandAsLines(deal.N).map((line) => '\t\t\t' + line);
	const south = formatHandAsLines(deal.S).map((line) => '\t\t\t' + line);
	const west = formatHandAsLines(deal.W);
	const east = formatHandAsLines(deal.E);
	const handsWestEast = [];
	for (let i = 0; i < Constants.NUMBER_OF_SUITS; i++) {
		handsWestEast.push(
			west[i] + calculateWestEastTabSpacing(west[i]) + east[i]
		);
	}
	const dealString = [...north, ...handsWestEast, ...south];
	return dealString.join('\n');
}
