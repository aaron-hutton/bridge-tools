import { Icons } from "@/components/icons";
import { Types } from "@bridge-tools/core";

interface Props {
  suit: Types.Suit;
  className?: string;
}

export function SuitSymbol({ suit, className }: Props) {
  switch (suit) {
    case "S":
      return <Icons.spade className={`text-black ${className}`} />;
    case "H":
      return <Icons.heart className={`text-red-700 ${className}`} />;
    case "D":
      return <Icons.diamond className={`text-orange-700 ${className}`} />;
    case "C":
      return <Icons.club className={`text-green-900 ${className}`} />;
  }
}
