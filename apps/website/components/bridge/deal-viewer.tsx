"use client";

import { COMPASS_BOARD_ORDER } from "@/utils/constants";
import { Types } from "@bridge-tools/core";
import React from "react";
import { BoardBackground } from "./board-components/board-background";
import { HandDiagram } from "./board-components/hand";

interface Props {
  deal: Types.Deal;
}

export function DealViewer({ deal }: Props) {
  return (
    <BoardBackground>
      <div></div>

      {COMPASS_BOARD_ORDER.map((direction, index) => (
        <React.Fragment key={index}>
          <HandDiagram
            hand={deal[direction]}
            direction={direction}
            cardsClickable={() => false}
          />
          <div></div>
        </React.Fragment>
      ))}
    </BoardBackground>
  );
}
