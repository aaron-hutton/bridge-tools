"use client";

import { DealViewer } from "@/components/bridge/deal-viewer";
import { Button } from "@/components/ui/button";
import { EMPTY_DEAL } from "@/utils/constants";
import { Types } from "@bridge-tools/core";
import { generate } from "@bridge-tools/generator";
import { useEffect, useState } from "react";

export function Generator() {
  const [deal, setDeal] = useState<Types.Deal>(EMPTY_DEAL);

  const generateDeal = () => {
    const deal = generate({})[0];
    setDeal(deal);
  };

  useEffect(() => {
    generateDeal();
  }, []);

  return (
    <div className="flex w-full flex-col items-center space-y-8">
      <Button onClick={generateDeal}>Generate Deal</Button>
      <DealViewer deal={deal} />
    </div>
  );
}
