export function isDefined<T>(x?: T | null): x is T {
  return x !== undefined && x !== null;
}
export function isNotDefined<T>(x?: T | null): x is undefined | null {
  return !isDefined(x);
}
