import { type Compass } from "./compass";
import { type SuitOrNT } from "./suit";

export interface PlayableContract {
  level: number;
  strain: SuitOrNT;

  declarer: Compass;

  doubled?: boolean;
  redoubled?: boolean;
}

export type Passout = "Passout";

export type Contract = Passout | PlayableContract;
