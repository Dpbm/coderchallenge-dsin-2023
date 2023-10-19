import {
	clearInput,
	femaleInputs,
	intelligenceMusic,
	nonSports,
	nonGames,
} from '../utils/strings.js';

export default function getIntelligence(age, sex, music, sport, game) {
	let intelligence = 0;

	const cleanSex = clearInput(sex);
	const cleanMusic = clearInput(music);
	const cleanSport = clearInput(sport);
	const cleanGame = clearInput(game);

	if (age >= 28) intelligence += 20;
	if (femaleInputs.has(cleanSex)) intelligence += 20;
	if (intelligenceMusic.has(cleanMusic)) intelligence += 20;
	if (!nonSports.has(cleanSport)) intelligence += 20;
	if (!nonGames.has(cleanGame)) intelligence += 20;

	return intelligence ? intelligence : 1;
}
