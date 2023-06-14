"use client";

import { dealAtom } from "@/atoms/board";
import { DealViewer } from "@/components/bridge/deal-viewer";
import { Button } from "@/components/ui/button";
import { generateDeals } from "@bridge-tools/generator";
import { Provider, useAtom } from "jotai";

function GenerateButton() {
  const [_, setDeal] = useAtom(dealAtom);
  const generate = () => {
    const deal = generateDeals({})[0];
    setDeal(deal);
  };

  return <Button onClick={generate}>Generate Deal</Button>;
}

export function Generator() {
  return (
    <Provider>
      <div className="flex w-full flex-col items-center space-y-8">
        <GenerateButton />
        <DealViewer />
      </div>
    </Provider>
  );
}
