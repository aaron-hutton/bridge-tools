import { Hand } from '..';
import { Deal } from '../types';

/**
 * Deep copies a deal, so there are no remaining references to the original hands or cards
 *
 * @param deal The deal to be copied
 * @returns A new copy of the deal which can be modified without modifying the original
 */
export function clone(deal: Deal) {
	return {
		N: Hand.clone(deal.N),
		E: Hand.clone(deal.E),
		S: Hand.clone(deal.S),
		W: Hand.clone(deal.W),
	};
}
