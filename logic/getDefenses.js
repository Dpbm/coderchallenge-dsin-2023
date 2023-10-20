import {
	velocityDefenses,
	totalDefenses,
	strengthDefenses,
	intelligenceDefenses,
} from '../utils/strings.js';
import random from '../utils/random.js';

export default function getDefenses(strengths) {
	const defenses = [];

	if (strengths.includes('velocity'))
		defenses.push(velocityDefenses[random(totalDefenses)]);
	if (strengths.includes('strength'))
		defenses.push(strengthDefenses[random(totalDefenses)]);
	if (strengths.includes('intelligence'))
		defenses.push(intelligenceDefenses[random(totalDefenses)]);

	return defenses;
}
