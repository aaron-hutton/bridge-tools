import { AssertionError } from '../assertion-error';

export function invert<X extends PropertyKey, Y extends PropertyKey>(
	obj: Record<X, Y>
): Record<Y, X> {
	// I've used ignore rather than expect-error as I don't
	// want this to start throwing errors in the future if it is fixed.
	//@ts-ignore This is perfectly fine
	const result: Record<Y, X> = {};

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
		throw new AssertionError(str);
	}

	return result;
}
