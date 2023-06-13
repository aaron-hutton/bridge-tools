import { Card, Constants, Types } from '@bridge-tools/core';
import { NUMBER_OF_DEALS } from './constants';

/**
 * This takes an id which uniquely defines a deal and converts it into a Deal object.
 * This does the reverse of encodeDeal.
 * It will throw an Error if the id does not have a corresponding deal.
 * @param id The id of the deal, should be between 0 and 52!/(13!^4) ~ 0.7x2^96
 * @returns An instance of the Deal represented by that id.
 */
export function decodeDeal(id: bigint): Types.Deal {
	if (id < 0 || id > NUMBER_OF_DEALS) {
		throw new Error(`The id: ${id} does not have a corresponding deal.`);
	}

	const north: Types.Hand = [];
	const east: Types.Hand = [];
	const south: Types.Hand = [];
	const west: Types.Hand = [];

	const deal = {
		N: north,
		E: east,
		S: south,
		W: west,
	};

	let i = id;
	let remainingSpace = NUMBER_OF_DEALS;
	const CARDS_IN_HAND = BigInt(Constants.CARDS_IN_HAND);
	const CARDS_IN_DEAL = BigInt(Constants.CARDS_IN_DEAL);

	for (let cardNum = 0; cardNum < Constants.CARDS_IN_DEAL; cardNum += 1) {
		const card = Card.numberToCard(cardNum);

		const remainingCards = CARDS_IN_DEAL - BigInt(cardNum);

		for (const direction of Object.values(Types.Compass)) {
			const spaceInHand = CARDS_IN_HAND - BigInt(deal[direction].length);
			const threshold = (remainingSpace * spaceInHand) / remainingCards;

			if (i < threshold) {
				deal[direction].push(card);
				remainingSpace = threshold;
				break;
			} else {
				i -= threshold;
			}
		}
	}

	return deal;
}
