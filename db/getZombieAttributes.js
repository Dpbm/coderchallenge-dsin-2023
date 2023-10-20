import db from './getDB.js';

export default function getZombieAttributes(id) {
	return new Promise((resolve, reject) => {
		db.get(
			`SELECT strength, velocity, intelligence, dangerousness FROM hosts WHERE id=?;`,
			[id],
			(error, row) => {
				if (error) reject(error);
				else resolve(row);
			}
		);
	});
}
