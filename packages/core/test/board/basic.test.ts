import { Board, Types } from '../../src';
import { Vulnerability } from '../../src/types';

describe('Testing Board.rotateClockwise', () => {
	it('Rotating 1 step works', () => {
		expect(Board.rotateClockwise(Types.Compass.North, 1)).toStrictEqual(
			Types.Compass.East
		);
	});

	it('Rotating 4 steps works', () => {
		expect(Board.rotateClockwise(Types.Compass.North, 4)).toStrictEqual(
			Types.Compass.North
		);
	});

	it('Rotating backwards', () => {
		expect(Board.rotateClockwise(Types.Compass.North, -1)).toStrictEqual(
			Types.Compass.West
		);
	});
});

describe('Testing Board.rotateAnticlockwise', () => {
	it('Rotating 1 step works', () => {
		expect(Board.rotateAnticlockwise(Types.Compass.North, 1)).toStrictEqual(
			Types.Compass.West
		);
	});
});

describe('Testing Board.countClockwiseSteps', () => {
	it('Check N -> S', () => {
		expect(
			Board.countClockwiseSteps(Types.Compass.North, Types.Compass.South)
		).toBe(2);
	});

	it('Check S -> N', () => {
		expect(
			Board.countClockwiseSteps(Types.Compass.South, Types.Compass.North)
		).toBe(2);
	});

	it('Check N -> N', () => {
		expect(
			Board.countClockwiseSteps(Types.Compass.North, Types.Compass.North)
		).toBe(0);
	});
});

describe('Testing Board.isNorthSouth', () => {
	it('Test', () => {
		expect(Board.isNorthSouth(Types.Compass.North)).toBeTruthy();
		expect(Board.isNorthSouth(Types.Compass.South)).toBeTruthy();
		expect(Board.isNorthSouth(Types.Compass.East)).toBeFalsy();
		expect(Board.isNorthSouth(Types.Compass.West)).toBeFalsy();
	});
});

describe('Testing Board.isSamePair', () => {
	it('NS', () => {
		expect(
			Board.isSamePair(Types.Compass.North, Types.Compass.South)
		).toBeTruthy();
	});

	it('EW', () => {
		expect(
			Board.isSamePair(Types.Compass.East, Types.Compass.West)
		).toBeTruthy();
	});

	it('NE', () => {
		expect(
			Board.isSamePair(Types.Compass.North, Types.Compass.East)
		).toBeFalsy();
	});
});

describe('Testing Board.isDirectionVulnerable', () => {
	it('Testing Love all', () => {
		expect(
			Board.isDirectionVulnerable(Types.Compass.North, Vulnerability.NvNv)
		).toBeFalsy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.East, Vulnerability.NvNv)
		).toBeFalsy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.South, Vulnerability.NvNv)
		).toBeFalsy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.West, Vulnerability.NvNv)
		).toBeFalsy();
	});

	it('Testing NS', () => {
		expect(
			Board.isDirectionVulnerable(Types.Compass.North, Vulnerability.VNv)
		).toBeTruthy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.East, Vulnerability.VNv)
		).toBeFalsy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.South, Vulnerability.VNv)
		).toBeTruthy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.West, Vulnerability.VNv)
		).toBeFalsy();
	});

	it('Testing EW', () => {
		expect(
			Board.isDirectionVulnerable(Types.Compass.North, Vulnerability.NvV)
		).toBeFalsy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.East, Vulnerability.NvV)
		).toBeTruthy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.South, Vulnerability.NvV)
		).toBeFalsy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.West, Vulnerability.NvV)
		).toBeTruthy();
	});

	it('Testing Game all', () => {
		expect(
			Board.isDirectionVulnerable(Types.Compass.North, Vulnerability.VV)
		).toBeTruthy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.East, Vulnerability.VV)
		).toBeTruthy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.South, Vulnerability.VV)
		).toBeTruthy();
		expect(
			Board.isDirectionVulnerable(Types.Compass.West, Vulnerability.VV)
		).toBeTruthy();
	});
});
