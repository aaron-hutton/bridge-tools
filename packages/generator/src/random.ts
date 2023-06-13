/**
 * This type can be used to implement your own random number generator for seeding the deal generator function.
 * The generator should ideally generate values between 0 and 52!/(13!^4) ~ 0.7x2^96. Although generating between
 * 0 and 2^96 will also work, with some ids being thrown away by the deal generation function, slowing it down.
 */
export type RandomGenerator = () => bigint;
