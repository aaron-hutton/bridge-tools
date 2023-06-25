import { StringParser, type Types } from "@bridge-tools/core";

export function convertDealToDDS(deal: Types.Deal) {
  const dealStr = ["N:"];
  dealStr.push(StringParser.stringifyHand(deal.N));
  dealStr.push(" ");
  dealStr.push(StringParser.stringifyHand(deal.E));
  dealStr.push(" ");
  dealStr.push(StringParser.stringifyHand(deal.S));
  dealStr.push(" ");
  dealStr.push(StringParser.stringifyHand(deal.W));
  return dealStr.join();
}
