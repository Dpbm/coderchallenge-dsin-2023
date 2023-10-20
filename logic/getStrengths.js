export default function getStrengths(strength, velocity, intelligence) {
	const strengths = [];
	if (strength >= 60) strengths.push('força');
	if (velocity >= 60) strengths.push('velocidade');
	if (intelligence >= 60) strengths.push('inteligência');
	return strengths;
}
