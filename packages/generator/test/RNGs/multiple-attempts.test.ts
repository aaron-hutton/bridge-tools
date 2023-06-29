import { multipleAttempts } from "../../src/multiple-attempts";

describe("Testing the multipleAttempts function", () => {
  it("Test that a valid rng passes", () => {
    expect(multipleAttempts(() => 1n, 2n, 1)).toBe(1n);
  });

  it("Test that an invalid rng causes a failure", () => {
    expect(() => multipleAttempts(() => -1n, 1n, 1)).toThrowError();
  });
});
