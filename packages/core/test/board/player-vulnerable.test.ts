import { Board, Types } from '../../src';
describe('Testing Board.isPlayerVulnerableOnBoard', () => {
	it('Love all boards', () => {
		const boardNumbers = [1, 8, 11, 14];
		for (const board of boardNumbers) {
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.North)
			).toBeFalsy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.South)
			).toBeFalsy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.East)
			).toBeFalsy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.West)
			).toBeFalsy();
		}
	});
	it('NS Vul boards', () => {
		const boardNumbers = [2, 5, 12, 15];
		for (const board of boardNumbers) {
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.North)
			).toBeTruthy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.South)
			).toBeTruthy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.East)
			).toBeFalsy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.West)
			).toBeFalsy();
		}
	});
	it('EW Vul boards', () => {
		const boardNumbers = [3, 6, 9, 16];
		for (const board of boardNumbers) {
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.North)
			).toBeFalsy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.South)
			).toBeFalsy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.East)
			).toBeTruthy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.West)
			).toBeTruthy();
		}
	});
	it('Game all boards', () => {
		const boardNumbers = [4, 7, 10, 13];
		for (const board of boardNumbers) {
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.North)
			).toBeTruthy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.South)
			).toBeTruthy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.East)
			).toBeTruthy();
			expect(
				Board.isPlayerVulnerableOnBoard(board, Types.Compass.West)
			).toBeTruthy();
		}
	});
});
