import { Box } from "@/components/ui-components/box";
import { Types } from "@bridge-tools/core";
import { ContractSymbol } from "./contract";

interface Props {
  contract: Types.Contract;
  claimedTricks: number;
  result: Types.BoardResult;
}

export function BoardResult({ contract, claimedTricks, result }: Props) {
  const claim = claimedTricks ?? 0;

  if (result === null) {
    return <div></div>;
  }

  return (
    <div className="p-4">
      <Box
        thickBorder
        titleComponent={
          <div className="flex h-full w-full flex-col items-center">
            <div className="flex w-full items-center justify-center rounded-tl-md bg-gray-400">
              Result
            </div>
          </div>
        }
        className="h-full"
      >
        <div className="flex grow flex-col items-center">
          {claim > 0 && (
            <p>
              Declarer claimed {claim} trick
              {claim > 1 ? "s" : ""}
            </p>
          )}
          <ContractSymbol contract={contract} includeDeclarer />
          <p>Result: {result.result}</p>
          <p>Score: {result.score}</p>
        </div>
      </Box>
    </div>
  );
}
