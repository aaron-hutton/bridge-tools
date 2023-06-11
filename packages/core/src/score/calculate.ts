import { isDirectionVulnerable, isNorthSouth } from '../board';
import { CONTRACT_BOOK } from '../bridge-constants';
import { isMinor } from '../card';
import {
	BoardResult,
	Contract,
	PlayableContract,
	Vulnerability,
} from '../types';

const NV_UNDERTRICK = 50;
const V_UNDERTRICK = 100;

const NV_D_UNDERTRICK_FIRST = 100;
const NV_D_UNDERTRICK_SECOND_THIRD = 200;
const NV_D_UNDERTRICK_SUBSEQ = 300;

const V_D_UNDERTRICK_FIRST = 200;
const V_D_UNDERTRICK_SUBSEQ = 300;

const MINOR_TRICK = 20;
const MAJOR_TRICK = 30;
const NT_TRICK_ADJUSTMENT = 10;

const GAME_THRESHOLD = 100;

const PARTSCORE_BONUS = 50;

const NV_GAME_BONUS = 250;
const NV_SLAM_BONUS = 500;
const NV_GRAND_BONUS = 500;

const V_GAME_BONUS = 450;
const V_SLAM_BONUS = 750;
const V_GRAND_BONUS = 750;

const D_INSULT = 50;
const RD_INSULT = 100;

const SLAM_LEVEL = 6;
const GRAND_LEVEL = 7;

const NV_DOUBLED_OVERTRICK = 100;
const V_DOUBLED_OVERTRICK = 200;

function calculateVulnerableUndertrickScore(
	contract: PlayableContract,
	vulnerable: boolean,
	undertricks: number
): number {
	const doubledScore =
		V_D_UNDERTRICK_FIRST + (undertricks - 1) * V_D_UNDERTRICK_SUBSEQ;

	if (contract.doubled) {
		return doubledScore;
	}

	if (contract.redoubled) {
		return 2 * doubledScore;
	}

	return V_UNDERTRICK * undertricks;
}

function calculateNonVulnerableUndertrickScore(
	contract: PlayableContract,
	vulnerable: boolean,
	undertricks: number
): number {
	const doubledScore =
		NV_D_UNDERTRICK_FIRST +
		Math.min(2, undertricks - 1) * NV_D_UNDERTRICK_SECOND_THIRD +
		Math.max(0, undertricks - 3) * NV_D_UNDERTRICK_SUBSEQ;
	if (contract.doubled) {
		return doubledScore;
	}

	if (contract.redoubled) {
		return 2 * doubledScore;
	}

	return NV_UNDERTRICK * undertricks;
}

function calculateUndertrickScore(
	contract: PlayableContract,
	vulnerable: boolean,
	undertricks: number
): number {
	return vulnerable
		? calculateVulnerableUndertrickScore(contract, vulnerable, undertricks)
		: calculateNonVulnerableUndertrickScore(
				contract,
				vulnerable,
				undertricks
		  );
}

function calculateOvertrickScore(
	contract: PlayableContract,
	vulnerable: boolean,
	overtricks: number
): number {
	const tricksOverBook = contract.level;
	let score = PARTSCORE_BONUS;

	let trickScore = 0;
	if (contract.strain === 'NT') {
		trickScore = NT_TRICK_ADJUSTMENT + tricksOverBook * MAJOR_TRICK;
	} else if (isMinor(contract.strain)) {
		trickScore = tricksOverBook * MINOR_TRICK;
	} else {
		trickScore = tricksOverBook * MAJOR_TRICK;
	}

	if (contract.doubled) {
		score += D_INSULT;
		trickScore *= 2;
	}

	if (contract.redoubled) {
		score += RD_INSULT;
		trickScore *= 4;
	}

	score += trickScore;
	if (trickScore >= GAME_THRESHOLD) {
		score += vulnerable ? V_GAME_BONUS : NV_GAME_BONUS;
	}

	if (contract.level >= SLAM_LEVEL) {
		score += vulnerable ? V_SLAM_BONUS : NV_SLAM_BONUS;
	}

	if (contract.level === GRAND_LEVEL) {
		score += vulnerable ? V_GRAND_BONUS : NV_GRAND_BONUS;
	}

	if (contract.doubled) {
		score +=
			overtricks *
			(vulnerable ? V_DOUBLED_OVERTRICK : NV_DOUBLED_OVERTRICK);
	} else if (contract.redoubled) {
		score +=
			2 *
			overtricks *
			(vulnerable ? V_DOUBLED_OVERTRICK : NV_DOUBLED_OVERTRICK);
	} else if (contract.strain === 'NT') {
		score += overtricks * MAJOR_TRICK;
	} else if (isMinor(contract.strain)) {
		score += overtricks * MINOR_TRICK;
	} else {
		score += overtricks * MAJOR_TRICK;
	}

	return score;
}

/**
 * Calculate the score from N/S perspective given a contract and the number of tricks taken
 *
 * @param contract The contract played on the board
 * @param vulnerability The vulnerability of the board
 * @param tricks The number of tricks taken by declarer
 * @returns A BoardResult containing the score for the board
 */
export function calculate(
	contract: Contract,
	vulnerability: Vulnerability,
	tricks: number
): BoardResult {
	if (contract === 'Passout') {
		return { result: 0, tricksTaken: 0, score: 0 };
	}

	const tricksContracted = contract.level + CONTRACT_BOOK;
	const result = tricks - tricksContracted;
	const vulnerable = isDirectionVulnerable(contract.declarer, vulnerability);

	if (result < 0) {
		const undertrickScore = calculateUndertrickScore(
			contract,
			vulnerable,
			-result
		);

		return {
			tricksTaken: tricks,
			result,
			score: isNorthSouth(contract.declarer)
				? -undertrickScore
				: undertrickScore,
		};
	} else {
		const overtrickScore = calculateOvertrickScore(
			contract,
			vulnerable,
			result
		);

		return {
			tricksTaken: tricks,
			result,
			score: isNorthSouth(contract.declarer)
				? overtrickScore
				: -overtrickScore,
		};
	}
}
