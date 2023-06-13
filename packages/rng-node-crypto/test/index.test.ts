import { Constants } from "@bridge-tools/generator";
import { NodeCryptoRandomNumberGenerator } from "../src";

describe("Testing the rng", () => {
  it("Testing we get a valid number ", () => {
    const id = NodeCryptoRandomNumberGenerator();

    expect(0n <= id && id < Constants.NUMBER_OF_DEALS).toBeTruthy();
  });
});
