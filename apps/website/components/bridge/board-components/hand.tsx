import { Box } from "@/components/ui-components/box";
import { cn } from "@/lib/utils";
import { Constants, Hand, StringParser, Types } from "@bridge-tools/core";
import { useMemo } from "react";
import { SuitSymbol } from "./suit";

interface Props {
  hand: Types.Hand;
  direction: Types.Compass;
  players?: Partial<Record<Types.Compass, string>>;
  selected?: boolean;
  onClick?: () => void;

  cardsClickable?: (card: Types.Card) => boolean;
  onCardClick?: (card: Types.Card) => void;
}

export function HandDiagram({
  hand,
  direction,
  players = {},
  selected = false,
  onClick,
  cardsClickable = () => false,
  onCardClick,
}: Props) {
  const separatedCards = useMemo(() => {
    const sortedHand = Hand.sort(Hand.clone(hand));
    return [
      sortedHand.filter((c) => c.suit === "S").map((c) => c.rank),
      sortedHand.filter((c) => c.suit === "H").map((c) => c.rank),
      sortedHand.filter((c) => c.suit === "D").map((c) => c.rank),
      sortedHand.filter((c) => c.suit === "C").map((c) => c.rank),
    ];
  }, [hand]);

  return (
    <Box
      onClick={onClick}
      selected={selected}
      thickBorder
      titleComponent={
        <>
          <div className="flex h-full items-center rounded-tl-md px-2 font-bold">
            {direction}
          </div>
          <hr className="h-full w-[1px] border-0 bg-black" />
          <div className="pl-2">{players?.[direction] ?? ""}</div>
        </>
      }
      className="overflow-x-auto text-lg"
    >
      {Constants.ALL_SUITS.map((suit, index) => {
        const classes = cn("flex h-8 w-full items-center bg-gray-200 p-2", {
          "rounded-b-md": index === Constants.NUMBER_OF_SUITS - 1,
        });

        return (
          <div className={classes} key={index}>
            <div className="w-4">
              <SuitSymbol suit={suit} />
            </div>
            <div className="grow pl-2 tracking-wider">
              {separatedCards[index]?.map((rank, index) => {
                const clickable = cardsClickable({
                  rank,
                  suit,
                });
                const classes = clickable
                  ? "cursor-pointer hover:font-bold"
                  : "";

                return (
                  <span
                    className={classes}
                    onClick={(e) => {
                      if (onCardClick !== undefined && clickable) {
                        e.stopPropagation();
                        onCardClick({ rank, suit });
                      }
                    }}
                    key={index}
                  >
                    {StringParser.stringifyRanks([rank])}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </Box>
  );
}
