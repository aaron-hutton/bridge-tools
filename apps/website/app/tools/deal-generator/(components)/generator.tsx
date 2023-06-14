"use client";

import { DealViewer } from "@/components/bridge/deal-viewer";
import { Button } from "@/components/ui/button";
import { EMPTY_DEAL } from "@/utils/constants";
import { Types } from "@bridge-tools/core";
import { generateDeals } from "@bridge-tools/generator";
import { Provider } from "jotai";
import { useEffect, useState } from "react";

export function Generator() {
  const [deal, setDeal] = useState<Types.Deal>(EMPTY_DEAL);

  const generate = () => {
    const deal = generateDeals({})[0];
    setDeal(deal);
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <Provider>
      <div className="flex w-full flex-col items-center space-y-8">
        <Button onClick={generate}>Generate Deal</Button>
        <DealViewer deal={deal} />
      </div>
    </Provider>
  );
}
