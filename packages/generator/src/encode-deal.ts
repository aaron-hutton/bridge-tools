import { Card, Constants, Deal, Hand, Types } from '@bridge-tools/core';
import { NUMBER_OF_DEALS } from './constants';

/**
 * This takes a Deal instance and encodes it as a bigint with a value between 0 and 52!/(13!^4).
 * The Deal will be destroyed in the process. So it must be deep copied if it is still required.
 * This does the reverse of decodeDeal.
 * @param deal The deal to be encoded
 * @returns A bigint representing the deal
 */
export function encodeDeal(deal: Types.Deal): bigint {
	let id = 0n;
	let remainingSpace = NUMBER_OF_DEALS;
	const CARDS_IN_DEAL = BigInt(Constants.CARDS_IN_DEAL);

	const dealClone = Deal.clone(deal);

	for (let cardNum = 0; cardNum < Constants.CARDS_IN_DEAL; cardNum += 1) {
		const card = Card.numberToCard(cardNum);

		const remainingCards = CARDS_IN_DEAL - BigInt(cardNum);
		for (const direction of Object.values(Types.Compass)) {
			const hand = dealClone[direction];

			const spaceInHand = BigInt(hand.length);
			const threshold = (remainingSpace * spaceInHand) / remainingCards;

			if (Hand.containsCard(hand, card)) {
				dealClone[direction] = Hand.removeCard(hand, card);
				remainingSpace = threshold;
				break;
			} else {
				id += threshold;
			}
		}
	}

	return id;
}
