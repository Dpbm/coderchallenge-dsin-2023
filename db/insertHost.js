import db from './getDB.js';
import getVelocity from '../logic/getVelocity.js';
import getStrength from '../logic/getStrength.js';
import getIntelligence from '../logic/getIntelligence.js';

export default function insertHost(data) {
	const { age, sex, weight, height, blood, music, sport, game } = data;
	return new Promise((resolve, reject) => {
		db.run(
			`INSERT INTO hosts (age, sex, weight, height, blood, music, sport, game, strength, velocity, intelligence) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
			[
				age,
				sex,
				weight,
				height,
				blood,
				music,
				sport,
				game,
				getStrength(age, sex, weight, height, sport),
				getVelocity(age, sex, weight, height, sport),
				getIntelligence(age, sex, music, sport, game),
			],
			(error) => {
				if (error) reject(error);
				else resolve();
			}
		);
	});
}
