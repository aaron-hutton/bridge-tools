import { DealGeneratorConstants, MathRandomNumberGenerator } from "../../src";

describe("Testing the MathRandomNumberGenerator", () => {
  it("Testing we get a valid number ", () => {
    const id = MathRandomNumberGenerator(DealGeneratorConstants.FULL_DEAL_BITS);

    expect(
      0n <= id && id < DealGeneratorConstants.NUMBER_OF_DEALS
    ).toBeTruthy();
  });
});
