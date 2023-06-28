import { Constants, type Types } from "@bridge-tools/core";

function factorial(num: number): bigint {
  let factorial = 1n;

  for (let i = 2; i <= num; i++) {
    factorial *= BigInt(i);
  }

  return factorial;
}

/**
 * Uses the fact that log(n!) = log(1) + log(2) + ... + log(n)
 */
function logFactorial(num: number) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += Math.log2(i);
  }
  return result;
}

/**
 * Calculates the number of deals which are available given the fixed cards
 */
export function calculateNumDeals(fixed: Types.Deal) {
  const numFixedCards =
    fixed.N.length + fixed.E.length + fixed.S.length + fixed.W.length;

  let result = factorial(Constants.CARDS_IN_DEAL - numFixedCards);
  result /= factorial(Constants.CARDS_IN_HAND - fixed.N.length);
  result /= factorial(Constants.CARDS_IN_HAND - fixed.E.length);
  result /= factorial(Constants.CARDS_IN_HAND - fixed.S.length);
  result /= factorial(Constants.CARDS_IN_HAND - fixed.W.length);

  return result;
}

/**
 * Calculates the log base 2 of the number of deals which are available given the fixed cards.
 * Which is then used as the range for the RNGs
 *
 * Uses the fact that log(n!) = log(1) + log(2) + ... + log(n)
 */
export function calculateNumDealsBits(fixed: Types.Deal) {
  const numFixedCards =
    fixed.N.length + fixed.E.length + fixed.S.length + fixed.W.length;

  let result = logFactorial(Constants.CARDS_IN_DEAL - numFixedCards);

  result -= logFactorial(Constants.CARDS_IN_DEAL - fixed.N.length);
  result -= logFactorial(Constants.CARDS_IN_DEAL - fixed.E.length);
  result -= logFactorial(Constants.CARDS_IN_DEAL - fixed.S.length);
  result -= logFactorial(Constants.CARDS_IN_DEAL - fixed.W.length);

  return Math.ceil(result);
}
