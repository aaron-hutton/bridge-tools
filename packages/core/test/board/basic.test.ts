import { Board } from "../../src";

describe("Testing Board.rotateClockwise", () => {
  it("Rotating 1 step works", () => {
    expect(Board.rotateClockwise("N", 1)).toStrictEqual("E");
  });

  it("Rotating 4 steps works", () => {
    expect(Board.rotateClockwise("N", 4)).toStrictEqual("N");
  });

  it("Rotating backwards", () => {
    expect(Board.rotateClockwise("N", -1)).toStrictEqual("W");
  });
});

describe("Testing Board.rotateAnticlockwise", () => {
  it("Rotating 1 step works", () => {
    expect(Board.rotateAnticlockwise("N", 1)).toStrictEqual("W");
  });
});

describe("Testing Board.countClockwiseSteps", () => {
  it("Check N -> S", () => {
    expect(Board.countClockwiseSteps("N", "S")).toBe(2);
  });

  it("Check S -> N", () => {
    expect(Board.countClockwiseSteps("S", "N")).toBe(2);
  });

  it("Check N -> N", () => {
    expect(Board.countClockwiseSteps("N", "N")).toBe(0);
  });
});

describe("Testing Board.isNorthSouth", () => {
  it("Test", () => {
    expect(Board.isNorthSouth("N")).toBeTruthy();
    expect(Board.isNorthSouth("S")).toBeTruthy();
    expect(Board.isNorthSouth("E")).toBeFalsy();
    expect(Board.isNorthSouth("W")).toBeFalsy();
  });
});

describe("Testing Board.isSamePair", () => {
  it("NS", () => {
    expect(Board.isSamePair("N", "S")).toBeTruthy();
  });

  it("EW", () => {
    expect(Board.isSamePair("E", "W")).toBeTruthy();
  });

  it("NE", () => {
    expect(Board.isSamePair("N", "E")).toBeFalsy();
  });
});

describe("Testing Board.isDirectionVulnerable", () => {
  it("Testing Love all", () => {
    expect(Board.isDirectionVulnerable("N", "NvNv")).toBeFalsy();
    expect(Board.isDirectionVulnerable("E", "NvNv")).toBeFalsy();
    expect(Board.isDirectionVulnerable("S", "NvNv")).toBeFalsy();
    expect(Board.isDirectionVulnerable("W", "NvNv")).toBeFalsy();
  });

  it("Testing NS", () => {
    expect(Board.isDirectionVulnerable("N", "VNv")).toBeTruthy();
    expect(Board.isDirectionVulnerable("E", "VNv")).toBeFalsy();
    expect(Board.isDirectionVulnerable("S", "VNv")).toBeTruthy();
    expect(Board.isDirectionVulnerable("W", "VNv")).toBeFalsy();
  });

  it("Testing EW", () => {
    expect(Board.isDirectionVulnerable("N", "NvV")).toBeFalsy();
    expect(Board.isDirectionVulnerable("E", "NvV")).toBeTruthy();
    expect(Board.isDirectionVulnerable("S", "NvV")).toBeFalsy();
    expect(Board.isDirectionVulnerable("W", "NvV")).toBeTruthy();
  });

  it("Testing Game all", () => {
    expect(Board.isDirectionVulnerable("N", "VV")).toBeTruthy();
    expect(Board.isDirectionVulnerable("E", "VV")).toBeTruthy();
    expect(Board.isDirectionVulnerable("S", "VV")).toBeTruthy();
    expect(Board.isDirectionVulnerable("W", "VV")).toBeTruthy();
  });
});
