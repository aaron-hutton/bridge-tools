import { type Types } from "@bridge-tools/core";

/**
 * This type can be used to implement your own random number generator for seeding the deal generator function.
 * It should generate a bigint between 0 and 2^(bits)
 */
export type RandomGenerator = (bits: number) => bigint;

/**
 * The basic deal generation options
 */
export interface DealGeneratorOptions {
  /**
   * The number of deals to generate
   * @default 1
   */
  num?: number;

  /**
   * The random number generator to use
   * @default MathRandomNumberGenerator
   */
  rng?: RandomGenerator;

  /**
   * The filter to be applied to the deals
   * @default None
   */
  filter?: (d: Types.Deal) => boolean;

  /**
   * The maximum number of attempts per deal to generate a hand satisfying the filters.
   * This should be increased with care as it might indicate filters which are too restrictive.
   * @default 1000
   */
  maxAttempts?: number;
}

/**
 * The deal options when generating deals with a single fixed hand
 */
export interface SingleFixedHandGeneratorOptions extends DealGeneratorOptions {
  /**
   * The fixed hand, will end up as N for any generated deals
   */
  hand: Types.Hand;
}

/**
 * The deal options when generating deals with two fixed hands
 */
export interface DoubleFixedHandGeneratorOptions extends DealGeneratorOptions {
  /**
   * The first fixed hand, will end up as N for any generated deals
   */
  hand1: Types.Hand;

  /**
   * The second fixed hand, will end up as E for any generated deals
   */
  hand2: Types.Hand;
}

/**
 * The deal options when generating deals with arbitrary fixed cards
 */
export interface CustomFixedHandGeneratorOptions extends DealGeneratorOptions {
  /**
   * Any cards which need to be fixed during deal generation. e.g. Fixing a hand for lead testing
   * @default {}
   */
  fixed: Types.Deal;
}
