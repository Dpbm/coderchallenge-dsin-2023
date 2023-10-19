import db from './getDB.js';

export default function insertHost(data) {
	const {
		age,
		sex,
		weight,
		height,
		blood,
		music,
		sport,
		game,
		strength,
		velocity,
		intelligence,
		dangerousness,
	} = data;

	return new Promise((resolve, reject) => {
		db.run(
			`
				INSERT INTO hosts (age, sex, weight, height, blood, music, sport, game, strength, velocity, intelligence, dangerousness) 
				VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			`,
			[
				age,
				sex,
				weight,
				height,
				blood,
				music,
				sport,
				game,
				strength,
				velocity,
				intelligence,
				dangerousness,
			],
			function (error) {
				if (error) reject(error);
				else resolve(this.lastID);
			}
		);
	});
}
