export function positiveModulo(a: number, modulus: number): number {
	let m = a % modulus;
	if (m < 0) {
		m += modulus;
	}
	return m;
}
