import { StringParser, type Types } from "@bridge-tools/core";
import { performance } from "perf_hooks";
import { solveDeal } from "../src/solve-deal";

// const deal: Types.Deal = {
//   N: StringParser.parseHand("KJ8.43.T8432.AJ5"),
//   E: StringParser.parseHand("AT753.AKJ95.96.4"),
//   S: StringParser.parseHand("Q964.Q8..KQT9863"),
//   W: StringParser.parseHand("2.T762.AKQJ75.72"),
// };
const deal: Types.Deal = {
  N: StringParser.parseHand("K.43.T8.AJ5", true),
  E: StringParser.parseHand("AT7.AK.96.4", true),
  S: StringParser.parseHand("Q9.Q8..KQT9", true),
  W: StringParser.parseHand("2.T7.AKQ.72", true),
};
// const deal: Types.Deal = {
//   N: StringParser.parseHand(".43.T8.AJ5", true),
//   E: StringParser.parseHand("AT.AK.96.4", true),
//   S: StringParser.parseHand("Q.Q8..KQT9", true),
//   W: StringParser.parseHand("2.T.AKQ.72", true),
// };
// const deal: Types.Deal = {
//   N: StringParser.parseHand("64..32.2", true),
//   E: StringParser.parseHand("K.A6..JT", true),
//   S: StringParser.parseHand("A2..T5.6", true),
//   W: StringParser.parseHand("J3.T.K.5", true),
// };
// const deal: Types.Deal = {
//   N: StringParser.parseHand("AQ...", true),
//   E: StringParser.parseHand("32...", true),
//   S: StringParser.parseHand("54...", true),
//   W: StringParser.parseHand("K6...", true),
// };

const start = performance.now();

const solution = solveDeal(deal, { declarer: "W", level: 4, strain: "H" });

const end = performance.now();

console.log(`NS can take ${solution} tricks`);

const elapsed = end - start;

console.log("Time to solve deal (ms): ", elapsed);
