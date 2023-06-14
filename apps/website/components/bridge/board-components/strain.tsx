import { Types } from "@bridge-tools/core";
import { SuitSymbol } from "./suit";

interface Props {
  strain: Types.Suit | Types.NoTrumpType;
  className?: string;
}

export function StrainSymbol({ strain, className }: Props) {
  if (strain === "NT") {
    return <span className={className}>NT</span>;
  } else {
    return <SuitSymbol suit={strain} className={className} />;
  }
}
