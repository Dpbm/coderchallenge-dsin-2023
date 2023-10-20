import db from './getDB.js';

export default function getZombieWeakness(id) {
	return new Promise((resolve, reject) => {
		db.all(
			`SELECT weakness FROM weaknesses WHERE host_id=?;`,
			[id],
			(error, rows) => {
				if (error) reject(error);
				else resolve(rows);
			}
		);
	});
}
