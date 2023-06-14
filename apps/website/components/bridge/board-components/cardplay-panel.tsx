import { contractAtom, dealAtom, playAtom } from "@/atoms/board";
import { Box } from "@/components/ui-components/box";
import { COMPASS_DISPLAY_ORDER } from "@/utils/constants";
import { Board, Constants, Deal, Trick, Types } from "@bridge-tools/core";
import { useAtom } from "jotai";
import React from "react";
import { SuitSymbol } from "./suit";

export function CardplayPanel() {
  const [play] = useAtom(playAtom);
  const [deal] = useAtom(dealAtom);
  const [contract] = useAtom(contractAtom);

  if (contract === null || contract === "Passout") {
    return null;
  }

  return (
    <Box
      titleComponent={
        <div className="flex w-full justify-center text-xl">Cardplay</div>
      }
      className="h-full w-full md:w-1/3"
    >
      {play.length === 0 && (
        <div className="flex justify-center p-4">
          No cards have been played.
        </div>
      )}
      {play.length !== 0 && (
        <div className="grid grid-cols-5">
          <div></div>
          {COMPASS_DISPLAY_ORDER.map((dir, index) => (
            <div className="flex items-center justify-center" key={index}>
              {dir}
            </div>
          ))}
          {play.map((trick, index) => {
            const firstCard = trick[0];
            if (firstCard === undefined) return null;
            const leader =
              Deal.findCard(deal, firstCard) ?? Types.Compass.North;
            const winner =
              trick.length === Constants.CARDS_IN_TRICK
                ? Trick.evaluate(trick, leader, contract.strain)
                : null;

            return (
              <React.Fragment key={index}>
                <div className="flex items-center justify-center">
                  {index + 1}
                </div>
                {COMPASS_DISPLAY_ORDER.map((dir, index2) => {
                  const card = trick[Board.countClockwiseSteps(leader, dir)];

                  if (card === undefined) return <div />;

                  return (
                    <div
                      className={`flex items-center justify-center ${
                        dir === winner ? "font-bold" : ""
                      }`}
                      key={index2}
                    >
                      <SuitSymbol suit={card.suit} className="inline" />
                      {card.rank}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </Box>
  );
}
