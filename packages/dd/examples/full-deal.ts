import { StringParser, type Types } from "@bridge-tools/core";
import { performance } from "perf_hooks";
import { doubleDummySolve } from "../src";

const deal: Types.Deal = {
  N: StringParser.parseHand("KJ8.43.T8432.AJ5"),
  E: StringParser.parseHand("AT753.AKJ95.96.4"),
  S: StringParser.parseHand("Q964.Q8..KQT9863"),
  W: StringParser.parseHand("2.T762.AKQJ75.72"),
};

async function run() {
  const start = performance.now();

  const solution = await doubleDummySolve(deal, [], "S", "NT");

  console.log(JSON.stringify(solution));

  const end = performance.now();

  const elapsed = end - start;

  console.log("Time to solve deal (ms): ", elapsed);
}

run()
  .then(() => {
    0;
  })
  .catch((e) => {
    console.log(e);
  });
