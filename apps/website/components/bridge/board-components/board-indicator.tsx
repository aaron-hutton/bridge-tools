import { Board, Types } from "@bridge-tools/core";

interface Props {
  vulnerability: Types.Vulnerability;
  dealer: Types.Compass;
  boardNum: number;
}

export function BoardIndicator({ vulnerability, dealer, boardNum }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-6 font-bold text-black">
      <div className="flex aspect-square h-full flex-col items-center justify-center">
        <div className="flex w-full basis-1/4 flex-row">
          <div className="basis-1/4"></div>
          <div
            className={`flex basis-2/4 items-center justify-center rounded-t-md border-2 border-b-0 border-black shadow-md ${
              Board.isDirectionVulnerable("N", vulnerability)
                ? "bg-red-600"
                : "bg-green-300"
            }`}
          >
            {dealer === "N" && "D"}
          </div>
          <div className="basis-1/4"></div>
        </div>
        <div className="flex w-full basis-2/4 flex-row">
          <div
            className={`flex  basis-1/4 items-center justify-center rounded-l-md border-2 border-r-0 border-black shadow-md ${
              Board.isDirectionVulnerable("W", vulnerability)
                ? "bg-red-600"
                : "bg-green-300"
            }`}
          >
            {dealer === "W" && "D"}
          </div>
          <div className="flex h-full w-full basis-2/4 items-center justify-center border-2 border-black bg-gray-200 text-xl shadow-md">
            {boardNum}
          </div>
          <div
            className={`flex basis-1/4 items-center justify-center rounded-r-md border-2 border-l-0 border-black shadow-md ${
              Board.isDirectionVulnerable("E", vulnerability)
                ? "bg-red-600"
                : "bg-green-300"
            }`}
          >
            {dealer === "E" && "D"}
          </div>
        </div>
        <div className="flex w-full basis-1/4 flex-row">
          <div className="basis-1/4"></div>
          <div
            className={`flex basis-2/4 items-center justify-center rounded-b-md  border-2 border-t-0 border-black shadow-md ${
              Board.isDirectionVulnerable("S", vulnerability)
                ? "bg-red-600"
                : "bg-green-300"
            }`}
          >
            {dealer === "S" && "D"}
          </div>
          <div className="basis-1/4"></div>
        </div>
      </div>
    </div>
  );
}
