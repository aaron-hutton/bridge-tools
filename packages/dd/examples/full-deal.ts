import { StringParser, type Types } from "@bridge-tools/core";
import { performance } from "perf_hooks";
import { cacheHit, cacheMiss, endPositionsReached } from "../src/alpha-beta";
import { solveDeal } from "../src/solve-deal";

// const deal: Types.Deal = {
//   N: StringParser.parseHand("KJ8.43.T8432.AJ5"),
//   E: StringParser.parseHand("AT753.AKJ95.96.4"),
//   S: StringParser.parseHand("Q964.Q8..KQT9863"),
//   W: StringParser.parseHand("2.T762.AKQJ75.72"),
// };
const deal10: Types.Deal = {
  N: StringParser.parseHand("KJ8.43.T8.AJ5", true),
  E: StringParser.parseHand("AT753.AK.96.4", true),
  S: StringParser.parseHand("Q964.Q8..KQT9", true),
  W: StringParser.parseHand("2.T76.AKQJ.72", true),
};
const deal9: Types.Deal = {
  N: StringParser.parseHand("KJ.43.T8.AJ5", true),
  E: StringParser.parseHand("AT75.AK.96.4", true),
  S: StringParser.parseHand("Q96.Q8..KQT9", true),
  W: StringParser.parseHand("2.T7.AKQJ.72", true),
};
const deal8: Types.Deal = {
  N: StringParser.parseHand("K.43.T8.AJ5", true),
  E: StringParser.parseHand("AT7.AK.96.4", true),
  S: StringParser.parseHand("Q9.Q8..KQT9", true),
  W: StringParser.parseHand("2.T7.AKQ.72", true),
};
const deal7: Types.Deal = {
  N: StringParser.parseHand(".43.T8.AJ5", true),
  E: StringParser.parseHand("AT.AK.96.4", true),
  S: StringParser.parseHand("Q.Q8..KQT9", true),
  W: StringParser.parseHand("2.T.AKQ.72", true),
};
const deal5: Types.Deal = {
  N: StringParser.parseHand(".4.T8.AJ5", true),
  E: StringParser.parseHand("A.AK.96.4", true),
  S: StringParser.parseHand(".Q8..KQT9", true),
  W: StringParser.parseHand(".T.AKQ.72", true),
};
const deal4: Types.Deal = {
  N: StringParser.parseHand("..T8.AJ5", true),
  E: StringParser.parseHand(".AK.96.4", true),
  S: StringParser.parseHand(".Q..KQT9", true),
  W: StringParser.parseHand("..AKQ.72", true),
};
const deal3: Types.Deal = {
  N: StringParser.parseHand("AQ.A..", true),
  E: StringParser.parseHand("32..A.", true),
  S: StringParser.parseHand("54...A", true),
  W: StringParser.parseHand("K6...K", true),
};
const deal2: Types.Deal = {
  N: StringParser.parseHand("AQ...", true),
  E: StringParser.parseHand("32...", true),
  S: StringParser.parseHand("54...", true),
  W: StringParser.parseHand("K6...", true),
};

const start = performance.now();

const solution = solveDeal(deal10, { declarer: "W", level: 4, strain: "H" });

const end = performance.now();

console.log(`NS can take ${solution} tricks`);
console.log(`We missed the cache ${cacheMiss}`);
console.log(`We hit the cache ${cacheHit}`);
console.log(`We reached ${endPositionsReached} end positions`);

const elapsed = end - start;

console.log("Time to solve deal (ms): ", elapsed);
