import { Board, Card, Constants, Hand, type Types } from "@bridge-tools/core";
import factory, { type DDSModule } from "../wasm/compiled";
import { type DDSResult } from "./dds-result";
import { convertCardFromDDS, convertCardToDDS } from "./dds/card-converter";
import { convertCompassToDDS } from "./dds/compass-converter";
import { convertDealToDDS } from "./dds/deal-converter";
import { convertTrumpToDDS } from "./dds/trump-converter";

const BYTES_PER_INT = 4;
const INTS_PER_RESULT = 3; // (suit, rank, result)

let instance: DDSModule | null = null;
async function getInstance() {
  if (instance === null) {
    instance = await factory();
    instance._dds_init();
  }

  return instance;
}

/**
 * Calculates the double dummy number of tricks available for the current player for all of the cards in their hand
 * @param deal The deal to solve
 * @param trick Any cards played to the current trick
 * @param toPlay The player to play next
 * @param trump The trump suit
 * @returns A list of cards and the associated number of tricks for each
 */
export async function doubleDummySolve(
  deal: Types.Deal,
  trick: Types.Trick,
  toPlay: Types.Compass,
  trump: Types.SuitOrNT
): Promise<DDSResult[]> {
  const instance = await getInstance();

  // Initialise everything
  const dealStringPointer = instance.allocateUTF8(convertDealToDDS(deal));
  const resultPointer = initialiseResultPointer(instance);

  const card0 = convertCardToDDS(trick[0]);
  const card1 = convertCardToDDS(trick[1]);
  const card2 = convertCardToDDS(trick[2]);

  const ddsTrump = convertTrumpToDDS(trump);
  const ddsDirection = convertCompassToDDS(
    Board.rotateAnticlockwise(toPlay, trick.length)
  );

  // Call through to DDS
  instance._dds_solve_board(
    ddsTrump,
    ddsDirection,
    card0.suit,
    card0.rank,
    card1.suit,
    card1.rank,
    card2.suit,
    card2.rank,
    dealStringPointer,
    resultPointer
  );

  // Convert to a useable result
  const retval = generateResult(deal, toPlay, resultPointer, instance);

  // Free some pointers
  instance._free(resultPointer);
  instance._free(dealStringPointer);

  return retval;
}

function generateResult(
  deal: Types.Deal,
  toPlay: Types.Compass,
  resultPointer: number,
  instance: DDSModule
): DDSResult[] {
  const retval: DDSResult[] = [];

  for (let i = 0; i < Constants.CARDS_IN_HAND; i++) {
    const currentIndex = resultPointer + i * BYTES_PER_INT * INTS_PER_RESULT;
    const rank = instance.getValue(currentIndex, "i32");
    const suit = instance.getValue(currentIndex + BYTES_PER_INT, "i32");
    const tricks = instance.getValue(currentIndex + 2 * BYTES_PER_INT, "i32");

    if (rank === -1 || rank === 0) {
      break;
    }

    const card: Types.Card | null = convertCardFromDDS({ rank, suit });
    retval.push({ card, result: tricks });

    // Check if there are any equivalent cards which dds will have discarded
    let equivalentCard = Card.cardBelow(card);
    while (equivalentCard !== null) {
      if (!Hand.containsCard(deal[toPlay], equivalentCard)) {
        break;
      }

      retval.push({ card: equivalentCard, result: tricks });
      equivalentCard = Card.cardBelow(equivalentCard);
    }
  }

  return retval;
}

function initialiseResultPointer(instance: DDSModule) {
  const resultPointer = instance._malloc(
    Constants.CARDS_IN_HAND * INTS_PER_RESULT * BYTES_PER_INT
  );

  for (let i = 0; i < Constants.CARDS_IN_HAND; i++) {
    instance.setValue(resultPointer + i * BYTES_PER_INT, -1, "i32");
  }
  return resultPointer;
}
