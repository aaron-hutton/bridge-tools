import { AssertionError } from '../assertion-error';
import {
	CARDS_IN_DEAL,
	CARDS_IN_HAND,
	CARDS_IN_SUIT,
} from '../bridge-constants';
import { Card, Rank, Suit } from '../types';
import { findOrThrow, invert } from '../utils/object';

const RANK_TO_NUMBER: Record<Rank, number> = {
	[Rank.Ace]: 0,
	[Rank.King]: 1,
	[Rank.Queen]: 2,
	[Rank.Jack]: 3,
	[Rank.Ten]: 4,
	[Rank.Nine]: 5,
	[Rank.Eight]: 6,
	[Rank.Seven]: 7,
	[Rank.Six]: 8,
	[Rank.Five]: 9,
	[Rank.Four]: 10,
	[Rank.Three]: 11,
	[Rank.Two]: 12,
};
const NUMBER_TO_RANK = invert(RANK_TO_NUMBER);

const SUIT_TO_NUMBER: Record<Suit, number> = {
	[Suit.Spade]: 0,
	[Suit.Heart]: 1,
	[Suit.Diamond]: 2,
	[Suit.Club]: 3,
};

const NUMBER_TO_SUIT = invert(SUIT_TO_NUMBER);

/**
 * Convert a suit to a numerical value
 */
export function suitToNumber(suit: Suit): number {
	return findOrThrow(SUIT_TO_NUMBER, suit, `Unexpected suit: ${suit}`);
}

/**
 * Convert a numerical value to its corresponding suit
 */
export function numberToSuit(num: number): Suit {
	return findOrThrow(
		NUMBER_TO_SUIT,
		num,
		`Unexpected number for suit: ${num}`
	);
}

/**
 * Check if a suit is a minor
 */
export function isMinor(suit: Suit): boolean {
	return suit === Suit.Club || suit === Suit.Diamond;
}

/**
 * Check if a suit is a major
 */
export function isMajor(suit: Suit): boolean {
	return suit === Suit.Heart || suit === Suit.Spade;
}

/**
 * Compares the two ranks and determines which one is higher
 */
export function compareRank(rank1: Rank, rank2: Rank): number {
	const n1 = RANK_TO_NUMBER[rank1];
	const n2 = RANK_TO_NUMBER[rank2];

	if (n1 < n2) {
		return 1;
	}

	if (n1 === n2) {
		return 0;
	}

	return -1;
}

/**
 * Return a numberical value for the card from 0-51
 */
export function cardToNumber(card: Card): number {
	return RANK_TO_NUMBER[card.rank] + CARDS_IN_SUIT * suitToNumber(card.suit);
}
/**
 * Return a card associated with that numerical value
 */
export function numberToCard(cardNumber: number): Card {
	if (cardNumber < 0 || cardNumber >= CARDS_IN_DEAL) {
		throw new AssertionError(
			`Tried to convert invalid card: ${cardToNumber}`
		);
	}
	return {
		rank: NUMBER_TO_RANK[cardNumber % CARDS_IN_HAND],
		suit: numberToSuit(Math.floor(cardNumber / CARDS_IN_HAND)),
	};
}

/**
 * Check if two cards are the same
 */
export function equalCard(card1: Card, card2: Card) {
	return card1.rank === card2.rank && card1.suit === card2.suit;
}
