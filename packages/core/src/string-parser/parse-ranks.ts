import { Rank } from '../types';
import { findOrThrow } from '../utils/object';

const STRING_RANK_TO_RANK = {
	A: Rank.Ace,
	a: Rank.Ace,
	K: Rank.King,
	k: Rank.King,
	Q: Rank.Queen,
	q: Rank.Queen,
	J: Rank.Jack,
	j: Rank.Jack,
	T: Rank.Ten,
	t: Rank.Ten,
	9: Rank.Nine,
	8: Rank.Eight,
	7: Rank.Seven,
	6: Rank.Six,
	5: Rank.Five,
	4: Rank.Four,
	3: Rank.Three,
	2: Rank.Two,
};

/**
 * Parse a single suit into a list of it's ranks. e.g. KQT7
 * becomes an array containing King, Queen, Ten, Seven
 * @param str The string for a single suit
 * @returns An array with the ranks of that suit, or an error if it cannot be parsed
 */
export function parseRanks(str: string): Rank[] {
	const hand: Rank[] = [];
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char.trim() === '') {
			continue;
		}

		if (char === '1') {
			if (str[i + 1] === '0') {
				hand.push(Rank.Ten);
				i += 1;
				continue;
			}
		} else {
			const rank = findOrThrow(
				STRING_RANK_TO_RANK,
				char,
				`Unexpected character: ${char}. Failed to parse ranks.`
			);
			hand.push(rank);
		}
	}

	return hand;
}
