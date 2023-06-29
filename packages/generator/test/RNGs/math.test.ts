import { DealGeneratorConstants, MathRandomNumberGenerator } from "../../src";

describe("Testing the MathRandomNumberGenerator", () => {
  it("Testing we get a valid number ", () => {
    const id = MathRandomNumberGenerator(DealGeneratorConstants.FULL_DEAL_BITS);

    expect(
      0n <= id &&
        id < BigInt(2) << BigInt(DealGeneratorConstants.FULL_DEAL_BITS)
    ).toBeTruthy();
  });
});
