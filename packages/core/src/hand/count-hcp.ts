import { Hand, Rank } from '../types';
export const MILTON_HCP: Record<Rank, number> = {
	A: 4,
	K: 3,
	Q: 2,
	J: 1,
	T: 0,
	9: 0,
	8: 0,
	7: 0,
	6: 0,
	5: 0,
	4: 0,
	3: 0,
	2: 0,
};
/**
 * Calculates the Milton HCP of a hand with A=4, K=3, Q=2, J=1
 * @param hand Hand to count points of
 * @returns Points in the specified hand
 */
export function countMiltonHCP(hand: Hand): number {
	let points = 0;
	for (const card of hand) {
		points += MILTON_HCP[card.rank];
	}
	return points;
}
