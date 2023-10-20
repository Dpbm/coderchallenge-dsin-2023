export default function random(max) {
	return Math.floor(Math.random() * max);
}

export function randomRange(min, max) {
	return Math.floor(Math.random() * max) + min;
}
