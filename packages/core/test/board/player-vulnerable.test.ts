import { Board } from "../../src";
describe("Testing Board.isPlayerVulnerableOnBoard", () => {
  it("Love all boards", () => {
    const boardNumbers = [1, 8, 11, 14];
    for (const board of boardNumbers) {
      expect(Board.isPlayerVulnerableOnBoard(board, "N")).toBeFalsy();
      expect(Board.isPlayerVulnerableOnBoard(board, "S")).toBeFalsy();
      expect(Board.isPlayerVulnerableOnBoard(board, "E")).toBeFalsy();
      expect(Board.isPlayerVulnerableOnBoard(board, "W")).toBeFalsy();
    }
  });
  it("NS Vul boards", () => {
    const boardNumbers = [2, 5, 12, 15];
    for (const board of boardNumbers) {
      expect(Board.isPlayerVulnerableOnBoard(board, "N")).toBeTruthy();
      expect(Board.isPlayerVulnerableOnBoard(board, "S")).toBeTruthy();
      expect(Board.isPlayerVulnerableOnBoard(board, "E")).toBeFalsy();
      expect(Board.isPlayerVulnerableOnBoard(board, "W")).toBeFalsy();
    }
  });
  it("EW Vul boards", () => {
    const boardNumbers = [3, 6, 9, 16];
    for (const board of boardNumbers) {
      expect(Board.isPlayerVulnerableOnBoard(board, "N")).toBeFalsy();
      expect(Board.isPlayerVulnerableOnBoard(board, "S")).toBeFalsy();
      expect(Board.isPlayerVulnerableOnBoard(board, "E")).toBeTruthy();
      expect(Board.isPlayerVulnerableOnBoard(board, "W")).toBeTruthy();
    }
  });
  it("Game all boards", () => {
    const boardNumbers = [4, 7, 10, 13];
    for (const board of boardNumbers) {
      expect(Board.isPlayerVulnerableOnBoard(board, "N")).toBeTruthy();
      expect(Board.isPlayerVulnerableOnBoard(board, "S")).toBeTruthy();
      expect(Board.isPlayerVulnerableOnBoard(board, "E")).toBeTruthy();
      expect(Board.isPlayerVulnerableOnBoard(board, "W")).toBeTruthy();
    }
  });
});
