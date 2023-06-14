import { Icons } from "@/components/icons";
import { Types } from "@bridge-tools/core";

interface Props {
  suit: Types.Suit;
  className?: string;
}

export function SuitSymbol({ suit, className }: Props) {
  switch (suit) {
    case Types.Suit.Spade:
      return <Icons.spade className={`text-black ${className}`} />;
    case Types.Suit.Heart:
      return <Icons.heart className={`text-red-700 ${className}`} />;
    case Types.Suit.Diamond:
      return <Icons.diamond className={`text-orange-700 ${className}`} />;
    case Types.Suit.Club:
      return <Icons.club className={`text-green-900 ${className}`} />;
  }
}
