import { AssertionError } from '../assertion-error';
import { rotateClockwise } from '../board';
import { compare } from '../card';
import { Compass, NoTrumpType, Suit, Trick } from '../types';

/**
 * Calculate the card which won the trick and return its index.
 *
 * @param trick The trick to be evaluated
 * @param trumpSuit The suit to use as trumps, undefined indicates this is notrump
 * @returns The index of the card which won the trick
 */
function evaluateTrickIndex(
	trick: Trick,
	trumpSuit?: Suit | NoTrumpType
): number {
	if (trick.length !== 4) {
		throw new AssertionError('Trying to evaluate an incomplete trick');
	}

	let bestCard = trick[0];
	let bestCardPosition = 0;

	for (let i = 1; i < trick.length; i++) {
		const card = trick[i];

		if (compare(bestCard, card, trumpSuit) < 0) {
			bestCard = card;
			bestCardPosition = i;
		}
	}

	return bestCardPosition;
}

/**
 * Calculate the card which won the trick and return the position of the trick winner
 *
 * @param trick The trick to be evaluated
 * @param startingPosition The position of the first player to follow to the trick
 * @param trumpSuit The suit to use as trumps, undefined indicates this is notrump
 * @returns The position of the winner of the trick
 */
export function evaluate(
	trick: Trick,
	startingPosition: Compass,
	trumpSuit?: Suit | NoTrumpType
): Compass {
	const winnerIndex = evaluateTrickIndex(trick, trumpSuit);

	return rotateClockwise(startingPosition, winnerIndex);
}
