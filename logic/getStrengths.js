export default function getStrengths(strength, velocity, intelligence) {
	const strengths = [];
	if (strength >= 60) strengths.push('strength');
	if (velocity >= 60) strengths.push('velocity');
	if (intelligence >= 60) strengths.push('intelligence');
	return strengths;
}
