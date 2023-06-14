import { auctionAtom, dealerAtom } from "@/atoms/board";
import { cn } from "@/lib/utils";
import { Board, Types } from "@bridge-tools/core";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { StrainSymbol } from "./strain";

function AuctionItem({ call }: { call: Types.AuctionCall }) {
  const classes = cn({
    "flex justify-center items-center": true,
    "bg-red-300 rounded-lg": call.alert ?? false,
  });

  switch (call.call) {
    case Types.PossibleCalls.Pass:
      return <div className={classes}>P</div>;
    case Types.PossibleCalls.Double:
      return <div className={classes}>X</div>;
    case Types.PossibleCalls.Redouble:
      return <div className={classes}>XX</div>;
    default:
      return (
        <div className={classes}>
          {call.call.level}
          <StrainSymbol strain={call.call.suit} />
        </div>
      );
  }
}

export function AuctionDiagram() {
  const [dealer] = useAtom(dealerAtom);
  const [auction] = useAtom(auctionAtom);

  const blanks = useMemo(() => {
    let b = [];
    let direction = Types.Compass.West;
    while (direction !== dealer) {
      b.push("");
      direction = Board.rotateClockwise(direction, 1);
    }

    return b;
  }, [dealer]);

  return (
    <div className="md:p-4">
      <div className="h-full w-full rounded-lg border-2 border-black bg-gray-200 text-lg text-black shadow-md">
        <div className="flex w-full rounded-t-md bg-gray-400">
          <div className="flex basis-1/4 justify-center rounded-tl-md">W</div>
          <div className="flex basis-1/4 justify-center rounded-tl-md">N</div>
          <div className="flex basis-1/4 justify-center rounded-tl-md">E</div>
          <div className="flex basis-1/4 justify-center rounded-tl-md">S</div>
        </div>
        <hr className="mx-auto w-full border-black" />
        <div className="grid max-h-[101px] grid-cols-4 overflow-y-auto rounded-b-md bg-gray-200">
          {blanks.map((_, index) => (
            <div key={index} />
          ))}
          {auction.map((call, index) => (
            <AuctionItem call={call} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
