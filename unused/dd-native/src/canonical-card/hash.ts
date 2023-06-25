import { type CanonicalDeal } from "./type";

export function hashCanonicalDeal({ deal }: CanonicalDeal, direction: number) {
  const result: string[] = [];

  deal.forEach((hand) => {
    hand.forEach((card) => {
      result.push(`${card.strain}${card.level}${card.count}`);
    });
  });
  result.push(direction.toString());

  return result.join();
}
