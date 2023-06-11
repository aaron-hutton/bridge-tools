import { rotateClockwise } from '.';
import { CARDS_IN_DEAL, CARDS_IN_TRICK } from '../bridge-constants';
import { cardToNumber } from '../card';
import { containsCard, containsSuit, removeCard } from '../hand';
import { evaluate } from '../trick';
import { Deal, PlayableContract, Trick } from '../types';
import { generateIncreasing } from '../utils/array';

/**
 * Check the play is valid. This requires:
 *  - Play starts 1 step clockwise from declarer
 *  - Each trick has 4 cards except the final trick which may have less
 *  - No card is played twice
 *  - Each card is played from the correct hand
 *  - The person that won the previous trick leads first to the current trick
 *  - Everyone follows to the led suit where possible
 *
 * @param deal The deal of the cards
 * @param play The play to validate
 * @param contract The contract in play
 * @returns True, if the play satisfies the listed requirements
 */
export function isPlayValid(
	deal: Deal,
	play: Trick[],
	contract: PlayableContract
): boolean {
	let allCardNumbers = generateIncreasing(CARDS_IN_DEAL);
	let directionOnLead = rotateClockwise(contract.declarer, 1);

	// We need to shallow copy the deal, so we don't overwrite it
	const dealInPlay = {
		N: deal.N,
		E: deal.E,
		S: deal.S,
		W: deal.W,
	};

	for (let i = 0; i < play.length; i++) {
		const trick = play[i];

		// Check each played card is valid
		for (let j = 0; j < trick.length; j += 1) {
			const card = trick[j];
			const cardNumber = cardToNumber(card);
			const directionToPlay = rotateClockwise(directionOnLead, j);
			const currentHand = dealInPlay[directionToPlay];

			// Check the card hasn't already been played
			if (!allCardNumbers.includes(cardNumber)) {
				return false;
			}
			allCardNumbers = allCardNumbers.filter(
				(number) => number !== cardNumber
			);

			// Check the card exists in the hand currently to play
			if (!containsCard(currentHand, card)) {
				return false;
			}
			dealInPlay[directionToPlay] = removeCard(currentHand, card);

			// Check that if the suit of the card isn't the suit led, this hand is void
			if (
				card.suit !== trick[0].suit &&
				containsSuit(currentHand, trick[0].suit)
			) {
				return false;
			}
		}

		if (trick.length !== CARDS_IN_TRICK) {
			// Only the final trick is allowed to have less than 4 cards in it
			if (i !== play.length - 1) {
				return false;
			}
		} else {
			directionOnLead = evaluate(trick, directionOnLead, contract.strain);
		}
	}

	return true;
}
