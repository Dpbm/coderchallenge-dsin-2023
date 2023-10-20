import {
	velocityWeapons,
	totalWeapons,
	strengthWeapons,
	intelligenceWeapons,
} from '../utils/strings.js';
import random from '../utils/random.js';

export default function getWeapons(weakness) {
	const weapons = [];

	if (weakness.includes('velocity'))
		weapons.push(velocityWeapons[random(totalWeapons)]);
	if (weakness.includes('strength'))
		weapons.push(strengthWeapons[random(totalWeapons)]);
	if (weakness.includes('intelligence'))
		weapons.push(intelligenceWeapons[random(totalWeapons)]);

	return weapons;
}
