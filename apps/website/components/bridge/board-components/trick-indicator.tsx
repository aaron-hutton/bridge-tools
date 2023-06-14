import { contractAtom } from "@/atoms/board";
import { Box } from "@/components/ui-components/box";
import { useAtom } from "jotai";
import { ContractSymbol } from "./contract";

interface Props {
  tricksNS?: number;
  tricksEW?: number;
}

export function TrickIndicator({ tricksNS = 0, tricksEW = 0 }: Props) {
  const [contract] = useAtom(contractAtom);

  return (
    <div className="md:p-4">
      <Box
        thickBorder
        titleComponent={
          <>
            <div className="flex h-full basis-1/2 flex-col items-center overflow-x-hidden">
              <div className="flex w-full items-center justify-center rounded-tl-md bg-gray-400">
                Contract
              </div>
            </div>
            <hr className="h-full w-[1px] border-0 bg-black" />
            <div className="flex h-full basis-1/2 flex-col items-center overflow-x-hidden">
              <div className="flex w-full items-center justify-center rounded-tr-md bg-gray-400">
                Tricks
              </div>
            </div>
          </>
        }
        className="h-full"
      >
        <div className="flex grow flex-row">
          <div className="flex h-full basis-1/2 flex-col items-center justify-center overflow-x-hidden rounded-bl-md bg-gray-200">
            <ContractSymbol contract={contract} includeDeclarer />
          </div>
          <hr className="h-full w-[1px] border-0 bg-black" />
          <div className="flex h-full basis-1/2 flex-col items-center justify-evenly overflow-x-hidden rounded-br-md bg-gray-200">
            <div className="">NS: {tricksNS}</div>
            <div className="">EW: {tricksEW}</div>
          </div>
        </div>
      </Box>
    </div>
  );
}
