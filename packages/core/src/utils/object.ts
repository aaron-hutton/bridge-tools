import { BridgeToolsError } from "../assertion-error";

export function invert<X extends PropertyKey, Y extends PropertyKey>(
  obj: Record<X, Y>
): Record<Y, X> {
  const result = {} as Record<Y, X>;

  for (const [key, value] of Object.entries(obj)) {
    result[value as Y] = key as X;
  }

  return result;
}

export function findOrThrow<X extends PropertyKey, Y>(
  obj: Record<X, Y>,
  index: X,
  str: string
): Y {
  const result = obj[index];

  if (result === undefined) {
    throw new BridgeToolsError(str);
  }

  return result;
}
