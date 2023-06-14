import {
  boardResultAtom,
  claimedTricksAtom,
  contractAtom,
} from "@/atoms/board";
import { Box } from "@/components/ui-components/box";
import { useAtom } from "jotai";
import { ContractSymbol } from "./contract";

export function BoardResult() {
  const [contract] = useAtom(contractAtom);
  const [claimedTricks] = useAtom(claimedTricksAtom);
  const [result] = useAtom(boardResultAtom);

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
