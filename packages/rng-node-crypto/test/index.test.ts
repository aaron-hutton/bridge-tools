import { DealGeneratorConstants } from "@bridge-tools/generator";
import { NodeCryptoRandomNumberGenerator } from "../src";

describe("Testing the rng", () => {
  it("Testing we get a valid number ", () => {
    const id = NodeCryptoRandomNumberGenerator(
      DealGeneratorConstants.FULL_DEAL_BITS
    );

    expect(
      0n <= id &&
        id < BigInt(2) << BigInt(DealGeneratorConstants.FULL_DEAL_BITS)
    ).toBeTruthy();
  });

  it("Testing that if we're asked for 1 bit we give it", () => {
    const id = NodeCryptoRandomNumberGenerator(1);

    expect(id === 0n || id === 1n).toBeTruthy();
  });
});
