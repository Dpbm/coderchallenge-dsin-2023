import { clearInput, maleInputs, strengthSports } from '../utils/strings.js';

export default function getStrength(age, sex, weight, height, sport) {
	let strength = 0;

	const cleanSex = clearInput(sex);
	const cleanSport = clearInput(sport);

	if (age >= 25 && age <= 50) strength += 20;
	if (maleInputs.has(cleanSex)) strength += 20;
	if (weight >= 80) strength += 20;
	if (height >= 1.8) strength += 20;
	if (strengthSports.has(cleanSport)) strength += 20;

	return strength ? strength : 1;
}
