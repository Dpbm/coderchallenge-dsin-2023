import { clearInput, maleInputs, velocitySports } from '../utils/strings';

export default function getVelocity(age, sex, weight, height, sport) {
	let velocity = 0;

	const cleanSex = clearInput(sex);
	const cleanSport = clearInput(sport);

	if (age >= 13 && age <= 40) velocity += 20;
	if (maleInputs.has(cleanSex)) velocity += 20;
	if (weight <= 75) velocity += 20;
	if (height >= 1.7) velocity += 20;
	if (velocitySports.has(cleanSport)) velocity += 20;

	return velocity ? velocity : 1;
}
