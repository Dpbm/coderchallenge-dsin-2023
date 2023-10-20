import {
	velocityWeapons,
	totalWeapons,
	strengthWeapons,
	intelligenceWeapons,
} from '../utils/strings.js';
import random from '../utils/random.js';

export default function getWeapons(weakness) {
	const weapons = [];

	if (weakness.includes('velocidade'))
		weapons.push(velocityWeapons[random(totalWeapons)]);
	if (weakness.includes('força'))
		weapons.push(strengthWeapons[random(totalWeapons)]);
	if (weakness.includes('inteligência'))
		weapons.push(intelligenceWeapons[random(totalWeapons)]);

	return weapons;
}
