import { clearInput, femaleInputs, nonSports } from '../utils/strings';

export default function getIntelligence(age, sex, sport, game) {
	let intelligence = 0;

	const cleanSex = clearInput(sex);
	const cleanSport = clearInput(sport);
	const cleanGame = clearInput(game);

	if (age >= 28) intelligence += 25;
	if (femaleInputs.has(cleanSex)) intelligence += 25;
	if (!nonSports.has(cleanSport)) intelligence += 25;
	if (!nonGames.has(cleanGame)) intelligence += 25;

	return intelligence ? intelligence : 1;
}
