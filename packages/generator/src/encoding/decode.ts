import { Card, Constants, type Types } from "@bridge-tools/core";
import { NUMBER_OF_DEALS } from "../constants";
import { performDeal } from "../generators/deal";

/**
 * This takes an id which uniquely defines a deal and converts it into a Deal object.
 * This does the reverse of encodeDeal.
 * It will throw an Error if the id does not have a corresponding deal.
 * @param id The id of the deal, should be between 0 and 52!/(13!^4) ~ 0.7x2^96
 * @returns An instance of the Deal represented by that id.
 */
export function decodeDeal(id: bigint): Types.Deal {
  if (id < 0 || id > NUMBER_OF_DEALS) {
    throw new Error(`The id: ${id} does not have a corresponding deal.`);
  }

  const deal = {
    N: [],
    E: [],
    S: [],
    W: [],
  } as Types.Deal;

  const allCards = Array.from({ length: Constants.CARDS_IN_DEAL }, (_, i) =>
    Card.numberToCard(i)
  );

  return performDeal(id, deal, NUMBER_OF_DEALS, allCards);
}
