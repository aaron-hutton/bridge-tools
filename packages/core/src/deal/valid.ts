import { CARDS_IN_DEAL, CARDS_IN_HAND } from '../bridge-constants';
import { cardToNumber } from '../card';
import { Compass, Deal } from '../types';
import { generateIncreasing } from '../utils/array';

/**
 * A deal is valid if every hand contains 13 cards and each of the 52 cards appears once in the 4 hands.
 * @param deal The deal to be checked
 * @returns True, if the deal is valid
 */
export function isValid(deal: Deal): boolean {
	// Let's check if every hand has 13 cards first
	if (
		deal[Compass.North].length !== CARDS_IN_HAND ||
		deal[Compass.East].length !== CARDS_IN_HAND ||
		deal[Compass.South].length !== CARDS_IN_HAND ||
		deal[Compass.West].length !== CARDS_IN_HAND
	) {
		return false;
	}

	// Now check we have every card
	let allCardNumbers = generateIncreasing(CARDS_IN_DEAL);

	for (const compass of Object.values(Compass)) {
		for (const card of deal[compass]) {
			const cardNumber = cardToNumber(card);
			if (!allCardNumbers.includes(cardNumber)) {
				return false;
			}

			allCardNumbers = allCardNumbers.filter(
				(value) => value !== cardNumber
			);
		}
	}

	return true;
}
