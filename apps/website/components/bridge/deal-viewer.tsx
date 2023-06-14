"use client";
import { dealAtom } from "@/atoms/board";
import { COMPASS_DISPLAY_ORDER } from "@/utils/constants";
import { useAtom } from "jotai";
import React from "react";
import { BoardBackground } from "./board-components/board-background";
import { HandDiagram } from "./board-components/hand";

export function DealViewer() {
  const [deal] = useAtom(dealAtom);

  return (
    <BoardBackground>
      <div></div>

      {COMPASS_DISPLAY_ORDER.map((direction, index) => (
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
