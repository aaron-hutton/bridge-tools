import { Hand } from '..';
import { Card, Compass, Deal } from '../types';

/**
 * Find which hand of the deal the given card is in.
 * @param deal The deal to check against
 * @param card The card to find
 * @returns The compass direction of the hand containing the card, or null if the card cannot be found
 */
export function findCard(deal: Deal, card: Card) {
	if (Hand.containsCard(deal.N, card)) {
		return Compass.North;
	} else if (Hand.containsCard(deal.E, card)) {
		return Compass.East;
	} else if (Hand.containsCard(deal.S, card)) {
		return Compass.South;
	} else if (Hand.containsCard(deal.W, card)) {
		return Compass.West;
	} else {
		return null;
	}
}
