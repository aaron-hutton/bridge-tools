import { dealAtom } from "@/atoms/board";
import { Board, Deal, Types } from "@bridge-tools/core";
import { useAtom } from "jotai";
import { Fragment } from "react";
import { SuitSymbol } from "./suit";

const ALL_DIRECTIONS = [
  Types.Compass.North,
  Types.Compass.West,
  Types.Compass.East,
  Types.Compass.South,
];

interface Props {
  trick: Types.Trick;
}

export function CurrentTrick({ trick }: Props) {
  const [deal] = useAtom(dealAtom);

  const firstCard = trick[0];
  const startDirection =
    firstCard !== undefined
      ? Deal.findCard(deal, firstCard) ?? Types.Compass.North
      : Types.Compass.North;
  return (
    <div className="grid grid-cols-3 grid-rows-3 sm:p-2">
      <div></div>
      {ALL_DIRECTIONS.map((direction, index) => {
        const steps = Board.countClockwiseSteps(startDirection, direction);
        const card = trick[steps];

        if (card === undefined) {
          return (
            <Fragment key={index}>
              <div></div>
              <div></div>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={index}>
              <div className="flex items-center justify-center rounded-lg border border-black bg-white text-lg text-gray-900 shadow-md sm:m-2">
                <SuitSymbol suit={card.suit} className="inline" />
                {card.rank}
              </div>
              <div></div>
            </Fragment>
          );
        }
      })}
    </div>
  );
}
