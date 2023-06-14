import { Types } from "@bridge-tools/core";
import { StrainSymbol } from "./strain";

interface Props {
  contract: Types.Contract | null;
  includeDeclarer?: boolean;
}

export function ContractSymbol({ contract, includeDeclarer = false }: Props) {
  if (contract === null) {
    return <>N/A</>;
  } else if (contract === "Passout") {
    return <>Pass</>;
  } else {
    return (
      <div className="flex flex-row items-center justify-center">
        {contract.level}
        <StrainSymbol strain={contract.strain} />
        {contract.doubled && "X"}
        {contract.redoubled && "XX"}
        <span className="ml-2">{includeDeclarer && contract.declarer}</span>
      </div>
    );
  }
}
