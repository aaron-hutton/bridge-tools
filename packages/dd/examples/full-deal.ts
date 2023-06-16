import { StringParser, type Types } from "@bridge-tools/core";
import { performance } from "perf_hooks";
import { solveDeal } from "../src/solve-deal";

const deal: Types.Deal = {
  N: StringParser.parseHand("KJ8.43.T8432.AJ5"),
  E: StringParser.parseHand("AT753.AKJ95.96.4"),
  S: StringParser.parseHand("Q964.Q8..KQT9863"),
  W: StringParser.parseHand("2.T762.AKQJ75.72"),
};

const start = performance.now();

const solution = solveDeal(deal, { declarer: "W", level: 4, strain: "H" });

const end = performance.now();

console.log(`NS can take ${solution} tricks`);

const elapsed = end - start;

console.log("Time to solve deal: ", elapsed);
