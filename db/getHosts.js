import db from './getDB.js';

export default function getHosts() {
	return new Promise((resolve, reject) => {
		db.all(
			`SELECT id, age, sex, weight, height, blood, music, sport, game, strength, velocity, intelligence FROM hosts`,
			[],
			(error, rows) => {
				if (error) reject(error);
				else resolve(rows);
			}
		);
	});
}
