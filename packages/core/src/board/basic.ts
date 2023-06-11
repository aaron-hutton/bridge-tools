import { Compass, Vulnerability } from '../types';
import { positiveModulo } from '../utils/mod';
import { invert } from '../utils/object';

const COMPASS_TO_NUMBER: Record<Compass, number> = {
	[Compass.North]: 0,
	[Compass.East]: 1,
	[Compass.South]: 2,
	[Compass.West]: 3,
};
const NUMBER_TO_COMPASS = invert(COMPASS_TO_NUMBER);

/**
 * Rotate the specified compass direction by the number of steps
 */
export function rotateClockwise(initial: Compass, steps: number): Compass {
	const initialNumber = COMPASS_TO_NUMBER[initial];
	const newNumber = positiveModulo(initialNumber + steps, 4);
	return NUMBER_TO_COMPASS[newNumber];
}
export function rotateAnticlockwise(initial: Compass, steps: number): Compass {
	return rotateClockwise(initial, -steps);
}

/**
 * Count the number of steps clockwise from one compass direction to another
 */
export function countClockwiseSteps(initial: Compass, end: Compass): number {
	const initialNumber = COMPASS_TO_NUMBER[initial];
	const endNumber = COMPASS_TO_NUMBER[end];

	return positiveModulo(endNumber - initialNumber, 4);
}

/**
 * Check if this is N/S or E/W
 */
export function isNorthSouth(direction: Compass): boolean {
	return direction === Compass.North || direction === Compass.South;
}

/**
 * Check if the two compass directions are both N/S or both E/W
 */
export function isSamePair(d1: Compass, d2: Compass): boolean {
	const bothNS = isNorthSouth(d1) && isNorthSouth(d2);
	const bothEW = !isNorthSouth(d1) && !isNorthSouth(d2);

	return bothNS || bothEW;
}

/**
 * Check if a given direction is vulnerable on a board
 */
export function isDirectionVulnerable(
	direction: Compass,
	vulnerability: Vulnerability
): boolean {
	if (isNorthSouth(direction)) {
		return (
			vulnerability === Vulnerability.VNv ||
			vulnerability === Vulnerability.VV
		);
	}

	return (
		vulnerability === Vulnerability.NvV ||
		vulnerability === Vulnerability.VV
	);
}
