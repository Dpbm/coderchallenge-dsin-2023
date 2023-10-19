import db from './getDB.js';

export default function insertHost(data) {
	const { age, sex, weight, height, blood, music, sport, game } = data;
	return new Promise((resolve, reject) => {
		db.run(
			`INSERT INTO hosts (age, sex, weight, height, blood, music, sport, game) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
			[age, sex, weight, height, blood, music, sport, game],
			(error) => {
				if (error) reject(error);
				else resolve();
			}
		);
	});
}
