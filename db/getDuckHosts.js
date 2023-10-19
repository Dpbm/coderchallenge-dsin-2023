import db from './getDB.js';

export default function getDuckHosts() {
	return new Promise((resolve, reject) => {
		db.all(
			`SELECT id, strength, velocity, intelligence, dangerousness FROM hosts`,
			[],
			(error, rows) => {
				if (error) reject(error);
				else resolve(rows);
			}
		);
	});
}
