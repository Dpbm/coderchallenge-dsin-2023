export default function getWeakness(strength, velocity, intelligence) {
	const weakness = [];
	if (strength <= 60) weakness.push('strength');
	if (velocity <= 60) weakness.push('velocity');
	if (intelligence <= 60) weakness.push('intelligence');
	return weakness;
}
