import db from './getDB.js';

export default function getZombieDefenses(id) {
	return new Promise((resolve, reject) => {
		db.all(
			`SELECT defense FROM defenses WHERE host_id=?;`,
			[id],
			(error, rows) => {
				if (error) reject(error);
				else resolve(rows);
			}
		);
	});
}
