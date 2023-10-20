export default function getWeakness(strength, velocity, intelligence) {
	const weakness = [];
	if (strength <= 60) weakness.push('força');
	if (velocity <= 60) weakness.push('velocidade');
	if (intelligence <= 60) weakness.push('inteligência');
	return weakness;
}
